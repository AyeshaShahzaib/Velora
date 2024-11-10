import Link from "next/link"
export default function About(){
    return(


<div>
  {/* Section 1: Header with Background Image */}
  <div className="bg-cover h-screen" style={{ backgroundImage: "url('About(background).png')" }}>
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
            <h1 className="font-medium ] text-sm sm:text-base lg:text-lg">Home</h1>
        </Link>
        <Link href="About_Page">
            <h1 className="font-medium text-sm sm:text-base lg:text-lg underline decoration-[#FF4E4E]">About</h1>
        </Link>
        <Link href="ContactUs_Page">
            <h1 className="font-medium text-sm sm:text-base lg:text-lg">Contact</h1>
        </Link>
    </div>
</div>

    <div className="flex justify-center items-center h-[65%]">
      <div className="flex flex-col items-center text-center px-4">
        <div className="py-12">
          <h1 className="text-5xl font-bold text-[#67CBE2]">OUR <b className="font-bold text-[#FF4E4E]">STORY</b></h1>
        </div>
        <div className="w-[80%] text-white font-thin">
          <p>
            Founded with a vision to redefine elegance, <b className="font-bold text-[#ff4e4ec9]">Volera</b> is more than just a fashion label. We are a movement, <b className="font-medium text-[#67CBE2]">celebrating individuality, artistry, and timeless</b> style.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Section 2: Mission Statement with Background Image */}
  <div
  className="h-screen bg-cover sm:h-[900px] flex flex-col justify-center items-start  px-4 sm:px-8 md:px-12 lg:px-16"
  style={{ backgroundImage: "url('About(background)2.png')" }}
>
  {/* Mission Title */}
  <div className="w-full lg:max-w-[50%] mb-6 lg:mb-10">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#67CBE2]">
      OUR <b className="font-bold text-[#FF4E4E]">MISSION</b>
    </h1>
  </div>

  {/* Mission Statement Text */}
  <div className="w-full lg:w-[50%] text-left text-black font-light text-lg sm:text-xl lg:text-2xl">
    <p>
      Our mission is to bring you pieces that speak to your{" "}
      <b className="font-semibold text-[#ff4e4ec9]">
        personality, blending modern aesthetics
      </b>{" "}
      with classic sophistication. Each item is meticulously crafted to ensure{" "}
      <b className="font-semibold text-[#67CBE2]">
        quality, comfort, and style.
      </b>
    </p>
  </div>
</div>
  

  {/* Section 3: Brand Values */}
  <div className="h-auto w-full py-10 px-4">
    <div className="my-16 flex justify-center items-center">
      <h1 className="text-4xl font-bold text-[#FF4E4E]">Brand Values</h1>
    </div>

    <div className="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/4 h-auto rounded-[30px] border-4 border-[#292525] bg-[#292525]">
        <img src="Hand.png" alt="Hand" className="w-full h-48 object-cover rounded-t-[30px]" />
        <h1 className="text-xl font-bold text-[#67CBE2] px-3 py-3">Craftsmanship</h1>
        <p className="px-3 text-white">We believe in quality over quantity. Every piece is carefully designed and crafted to stand the test of time.</p>
      </div>

      <div className="w-full md:w-1/4 h-auto rounded-[30px] border-4 border-[#292525] bg-[#292525]">
        <img src="Leaf.png" alt="Leaf" className="w-full h-48 object-cover rounded-t-[30px]" />
        <h1 className="text-xl font-bold text-[#67CBE2] px-3 py-3">Sustainability</h1>
        <p className="px-3 text-white">We believe in quality over quantity. Every piece is carefully designed and crafted to stand the test of time.</p>
      </div>

      <div className="w-full md:w-1/4 h-auto rounded-[30px] border-4 border-[#292525] bg-[#292525]">
        <img src="Bulb.png" alt="Bulb" className="w-full h-48 object-cover rounded-t-[30px]" />
        <h1 className="text-xl font-bold text-[#67CBE2] px-3 py-3">Innovation</h1>
        <p className="px-3 text-white">We believe in quality over quantity. Every piece is carefully designed and crafted to stand the test of time.</p>
      </div>
    </div>
  </div>
</div>
    )
    }