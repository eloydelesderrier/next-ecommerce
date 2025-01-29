import {stripe} from '@/lib/stripe';
import { ProductType } from '@/types/Product.Type';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';



const calculatedOrderAmount = (items:ProductType[]) => {
    const totalPrice = items.reduce((acc, item)=>{
        return acc + item.price! * item.quantity!
    }, 0)
    return totalPrice;
}

export async function POST(req: Request) {
    const { userId } = await auth();
    const { items, payment_intent_id } = await req.json();

    console.log('userId', userId)
    if (!userId){
        return new Response('Unauthorized', {status:401})
    }

    const customerIdTep = 'cus_Rg3XfLF9CTARcn';
    const total = calculatedOrderAmount(items);

    const orderDate = {
        user: {connect:{id:1}},
        amount: total,
        currency: 'brl',
        status: 'pending',
        paymentIntentId: payment_intent_id,
        product: {
            create: items.map((item: ProductType) => ({
                name: item.name,
                description: item.description,
                quantity: item.quantity,
                price: item.price,
                image: item.image
            }))
        }
    }

    if (payment_intent_id){
        const current_intent = await stripe.paymentIntents.retrieve(payment_intent_id);
        if (current_intent){
            const update_Intent = await stripe.paymentIntents.update(payment_intent_id,{
                amount: total
            });
            const [existing_order, update_order] = await Promise.all([
                prisma.order.findFirst({
                  where: { paymentIntentId: payment_intent_id },
                  include: { products: true },
                }),
            
                prisma.order.update({
                    where:{paymentIntentId: payment_intent_id},
                        data:{
                        amount:total,
                        products:{
                        deleteMany:{},
                        create: items.map((item: ProductType) => ({
                            name: item.name,
                            description: item.description,
                            quantity: item.quantity,
                            price: item.price,
                            image: item.image
                        }))
                    }
                }})
            ]);
            if(!existing_order){
                return new Response('Order not found', {status:400});
            }
            return Response.json({paymentIntent: update_Intent}, {status:200})

        }
        
    }else{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculatedOrderAmount(items),
            currency: 'brl',
            automatic_payment_methods: {enabled:true},
        });
        orderDate.paymentIntentId = paymentIntent.id;
       
        const newOrder = await prisma.order.create({
            data: orderDate
        })
        return Response.json(paymentIntent, {status:200})
    }

    console.log(items, payment_intent_id)

    
}