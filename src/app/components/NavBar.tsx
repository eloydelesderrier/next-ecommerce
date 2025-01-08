import Link from "next/link";


function NavBar(){
    return(
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-zinc-950 text-gray-200">
            <Link href='/' className=" uppercase font-bold text-md flex items-center">
                Dev Tools
            </Link>
        </nav>
       
    );
}

export default NavBar;
