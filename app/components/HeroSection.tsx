import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
    return (
        <div className="relative">
 

<div className="absolute top-0 left-0 right-0 h-20 flex justify-between items-center px-4 sm:px-6 lg:px-8 z-10 bg-transparent">
    <div className="flex w-1/3">
        <img 
            src="Volera.png" 
            alt="Logo" 
            className="h-auto max-h-16 w-auto sm:max-h-20 md:max-h-24 lg:max-h-28 xl:max-h-32"
        />
    </div>
    <div className="flex justify-between items-center  sm:w-1/2 md:w-1/3  text-white space-x-4 sm:space-x-6 lg:space-x-8">
        <Link href="Home_Page">
            <h1 className="font-medium underline decoration-[#FF4E4E] text-sm sm:text-base lg:text-lg">Home</h1>
        </Link>
        <Link href="About_Page">
            <h1 className="font-medium text-sm sm:text-base lg:text-lg">About</h1>
        </Link>
        <Link href="ContactUs_Page">
            <h1 className="font-medium text-sm sm:text-base lg:text-lg">Contact</h1>
        </Link>
    </div>
</div>
    
<div className="relative w-full">
    <img src="Hero.png" alt="Hero" className="w-full h-[100vh] object-cover opacity-95" />
    <div className="absolute inset-0 flex flex-col mt-[250px] text-white">
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 text-start overflow-hidden">
    <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-medium ml-1 text-[#67CBE2]">
        Elegance
    </h1>
    
    <div className="overflow-hidden flex justify-start">
        <h1 className="text-[#FF4E4E] font-semibold mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-8xl">
            Redefined
        </h1>
    </div>
    
    <h1 className="text-white font-medium mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl ml-1">
        Unleash Your Unique Style
    </h1>
    
    <button className="mt-8 px-8 sm:px-12 md:px-16 lg:px-24 py-3 sm:py-4 md:py-5 lg:py-6 bg-white text-[#292525] rounded-full font-semibold hover:bg-white hover:text-[#FF4E4E] border-2 border-[#FF4E4E] transition-all duration-300">
        Shop Now
    </button>

        </div> 
    </div>
</div>
</div>
    );
}


