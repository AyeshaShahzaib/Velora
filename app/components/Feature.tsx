export default function Feature() {
  return (
    // <div className="h-[600px] w-full">
    //   <div>
    //     <div className="py-28 flex justify-center">
    //       <h1 className="text-3xl font-bold text-[#FF4E4E] ">Our Signature Collections</h1>
    //     </div>
    //     <div className="h-[600px] flex  justify-evenly text-white">
    //       <div className="w-1/4 h-[75%]  rounded-[30px] border-4 border-[#292525] bg-[#292525]">
    //         <div><img src="Feature1.png" alt="Feature1" /></div>
    //         <div><h1 className="text-xl font-bold text-[#FF4E4E] px-3 py-3">Classic Revival</h1></div>
    //         <p className="px-3">Timeless pieces that never go out of style.</p>
    //     <div className="flex justify-end mt-10"><button className="mx-3 my-3 py-2 px-6 border-2 border-[#FF6363] rounded-full font-semibold">Shop Now</button></div>   
    //       </div>
    //       <div className="w-1/4 h-[75%]  rounded-[30px] border-4 border-[#292525] bg-[#292525]">
    //         <div><img src="Feature2.png" alt="Feature1" /></div>
    //         <div><h1 className="text-xl font-bold text-[#FF4E4E] px-3 py-3">Urban Edge</h1></div>
    //         <p className="px-3">Bold, modern designs inspired by city life.</p>
    //     <div className="flex justify-end mt-10"><button className="mx-3 my-3 py-2 px-6 border-2 border-[#FF6363] rounded-full font-semibold">Shop Now</button></div>   
    //       </div>
    //       <div className="w-1/4 h-[75%]  rounded-[30px] border-4 border-[#292525] bg-[#292525]">
    //         <div><img src="Feature3.png" alt="Feature1" /></div>
    //         <div><h1 className="text-xl font-bold text-[#FF4E4E] px-3 py-3">Seasonal Hues</h1></div>
    //         <p className="px-3">Seasonal pieces featuring the latest colors and trends.</p>
    //     <div className="flex justify-end mt-10"><button className="mx-3 my-3 py-2 px-6 border-2 border-[#FF6363] rounded-full font-semibold">Shop Now</button></div>   
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="h-auto w-full py-10 px-4">
    <div className="text-center py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#FF4E4E]">Our Signature Collections</h1>
    </div>
    
    <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch text-white space-y-6 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/4 h-auto rounded-2xl border-4 border-[#292525] bg-[#292525] p-4 flex flex-col">
            <img src="Feature1.png" alt="Classic Revival" className="w-full h-48 object-cover rounded-t-2xl" />
            <h1 className="text-lg sm:text-xl font-bold text-[#FF4E4E] pt-4">Classic Revival</h1>
            <p className="pt-2 text-sm sm:text-base">Timeless pieces that never go out of style.</p>
            <div className="flex justify-end mt-auto">
                <button className="mt-4 py-2 px-4 sm:px-6 border-2 border-[#FF6363] rounded-full font-semibold">
                    Shop Now
                </button>
            </div>
        </div>
        
        <div className="w-full md:w-1/4 h-auto rounded-2xl border-4 border-[#292525] bg-[#292525] p-4 flex flex-col">
            <img src="Feature2.png" alt="Urban Edge" className="w-full h-48 object-cover rounded-t-2xl" />
            <h1 className="text-lg sm:text-xl font-bold text-[#FF4E4E] pt-4">Urban Edge</h1>
            <p className="pt-2 text-sm sm:text-base">Bold, modern designs inspired by city life.</p>
            <div className="flex justify-end mt-auto">
                <button className="mt-4 py-2 px-4 sm:px-6 border-2 border-[#FF6363] rounded-full font-semibold">
                    Shop Now
                </button>
            </div>
        </div>
        
        <div className="w-full md:w-1/4 h-auto rounded-2xl border-4 border-[#292525] bg-[#292525] p-4 flex flex-col">
            <img src="Feature3.png" alt="Seasonal Hues" className="w-full h-48 object-cover rounded-t-2xl" />
            <h1 className="text-lg sm:text-xl font-bold text-[#FF4E4E] pt-4">Seasonal Hues</h1>
            <p className="pt-2 text-sm sm:text-base">Seasonal pieces featuring the latest colors and trends.</p>
            <div className="flex justify-end mt-auto">
                <button className="mt-4 py-2 px-4 sm:px-6 border-2 border-[#FF6363] rounded-full font-semibold">
                    Shop Now
                </button>
            </div>
        </div>
    </div>
</div>
  );
}
