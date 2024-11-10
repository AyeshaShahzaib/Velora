export default function NewArrival(){
    return(
<div className="h-auto w-full py-10 px-4">
    <div className="text-center py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#FF4E4E]">New Arrivals</h1>
    </div>
    
    <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch text-white space-y-6 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/4 h-auto rounded-2xl border-4 border-[#292525] bg-[#292525] p-4 flex flex-col">
            <img src="Arrival1.png" alt="The Luxe Blazer" className="w-full h-48 object-cover rounded-t-2xl" />
            <h1 className="text-lg sm:text-xl font-bold text-[#FF4E4E] pt-4">The Luxe Blazer</h1>
            <p className="pt-2 text-sm sm:text-base">An elegant blazer with a modern twist. Perfect for adding sophistication to any outfit.</p>
            <p className="text-[#FF4E4E] font-bold pt-2">$150.00</p>
            <div className="flex justify-end mt-auto">
                <button className="mt-4 py-2 px-4 sm:px-6 border-2 border-[#FF6363] rounded-full font-semibold">
                    Shop Now
                </button>
            </div>
        </div>
        
        <div className="w-full md:w-1/4 h-auto rounded-2xl border-4 border-[#292525] bg-[#292525] p-4 flex flex-col">
            <img src="Arrival2.png" alt="Summer Midi Dress" className="w-full h-48 object-cover rounded-t-2xl" />
            <h1 className="text-lg sm:text-xl font-bold text-[#FF4E4E] pt-4">Summer Midi Dress</h1>
            <p className="pt-2 text-sm sm:text-base">A casual, midi dress designed to make a statement. Ideal for evening occasions.</p>
            <p className="text-[#FF4E4E] font-bold pt-2">$180.00</p>
            <div className="flex justify-end mt-auto">
                <button className="mt-4 py-2 px-4 sm:px-6 border-2 border-[#FF6363] rounded-full font-semibold">
                    Shop Now
                </button>
            </div>
        </div>
        
        <div className="w-full md:w-1/4 h-auto rounded-2xl border-4 border-[#292525] bg-[#292525] p-4 flex flex-col">
            <img src="Arrival3.png" alt="Classic Wool Sweater" className="w-full h-48 object-cover rounded-t-2xl" />
            <h1 className="text-lg sm:text-xl font-bold text-[#FF4E4E] pt-4">Classic Wool Sweater</h1>
            <p className="pt-2 text-sm sm:text-base">A wool sweater that combines warmth and style. A must-have for the cooler seasons.</p>
            <p className="text-[#FF4E4E] font-bold pt-2">$120.00</p>
            <div className="flex justify-end mt-auto">
                <button className="mt-4 py-2 px-4 sm:px-6 border-2 border-[#FF6363] rounded-full font-semibold">
                    Shop Now
                </button>
            </div>
        </div>
    </div>
</div>
    )
}