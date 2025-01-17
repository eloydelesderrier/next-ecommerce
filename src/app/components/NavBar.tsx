'use client';
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useCartStore } from "@/store";
import { FaCartPlus } from "react-icons/fa";



function NavBar(){
    //const useStore = useCartStore();
    return(
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-zinc-950 text-gray-200">
            <Link href='/' className=" uppercase font-bold text-md flex items-center">
                Dev Tools
            </Link>
            <div className="flex items-center gap-8">
                <div className="flex items-center cursor-pointer relative">
                    <FaCartPlus size={24} />
                    <span className="bg-red-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-4 bottom-3  ">
                        2
                    </span>
                </div>
                
                <div>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="border rounded-md border-gray-400 px-3 py-2">Fazer Login</button>                       
                        </SignInButton>
                    </SignedOut>    
                </div>
                
            </div>
        </nav>
       
    );
}

export default NavBar;
