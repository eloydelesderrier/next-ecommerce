'use client';
import { SignUp } from "@clerk/nextjs";

type SignUpPageProps = {
    serchParams:{
        redirectUrl: string
    }
}

export default function SignInPage({serchParams: {}}: SignUpPageProps){
    return(
        <section className="py-14">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <SignUp signInUrl="/sign-up"/>
                </div>
            </div>
        </section>
    )
}