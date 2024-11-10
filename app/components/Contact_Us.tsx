import Link from "next/link"
export default function Contact_Us(){
    return(
        <div className="bg-cover" style={{backgroundImage:"url('Contact.png')"}}>
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
              <div className="max-w-2xl mx-auto p-6 py-28">
     
      <h1 className="text-4xl font-bold text-center text-[#FF4E4E] mb-4">Get in Touch</h1>
      <p className="text-lg text-center text-white mb-8">
        We would love to hear from you. Whether you have questions about our products, need assistance, or just want to say hello, our team is here to help.
      </p>

      
      <form className="flex flex-col space-y-4 mb-10">
        <label className="text-left font-medium text-white" htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required className="p-3 border-2 border-[#67CBE2] rounded-lg focus:outline-none bg-[#292525] text-white" />

        <label className="text-left font-medium text-white" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required className="p-3 border-2 border-[#67CBE2] rounded-lg focus:outline-none bg-[#292525] text-white" />

        <label className="text-left font-medium text-white" htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required className="p-3 border-2 border-[#67CBE2] rounded-lg focus:outline-none bg-[#292525] text-white" />

        <label className="text-left font-medium text-white" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required className="p-3 border-2 border-[#67CBE2] rounded-lg focus:outline-none bg-[#292525] text-white"></textarea>

        <button type="submit" className="bg-[#67CBE2] text-[#292525] py-3 rounded-lg font-semibold ">Send Message</button>
      </form>

     
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold text-[#FF4E4E]">Contact Information</h3>
        <p className="text-white"><strong className="text-[#67CBE2]">Email:</strong> support@Volera.com</p>
        <p className="text-white"><strong className="text-[#67CBE2]">Phone:</strong> +1 (123) 456-7890</p>
        <p className="text-white"><strong className="text-[#67CBE2]">Address:</strong> [Your Address Here]</p>

       
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-[#FF4E4E] mb-2">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="instagram.svg" alt="Instagram" className="w-8 h-8 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="facebook.svg" alt="Facebook" className="w-8 h-8 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="twitter.svg" alt="Twitter" className="w-8 h-8 transition-transform transform hover:scale-110 fill-current text-[#67CBE2]" />
            </a>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}