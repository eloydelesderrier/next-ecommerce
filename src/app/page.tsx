import Image from "next/image";

export default function Home() {
  return (
   <div className="max-w-7xl mx-auto pt-8 px-6 xl:px-0 ">
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10">
      <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
        Prod 1
      </div>
      <div className="bg-white  text-black rounded-lg shadow-lg overflow-hidden">
        Prod 2
      </div>
      <div className="bg-white  text-black rounded-lg shadow-lg overflow-hidden">
        Prod 3
      </div>
      <div className="bg-white  text-black rounded-lg shadow-lg overflow-hidden">
        Prod 4
      </div>
    </div>
    
   </div>
  );
}
