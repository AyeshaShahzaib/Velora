import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-[#292525] text-white py-16">
  <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {/* About Us Section */}
      <div>
        <h2 className="text-xl font-bold text-[#67CBE2] mb-4">About Us</h2>
        <p className="text-sm font-light">
          <b className="font-medium text-[#FF4E4E]">Volera</b> is more than just a fashion label. We celebrate individuality, artistry, and timeless style.
        </p>
      </div>

      {/* Quick Links Section */}
      <div>
        <h2 className="text-xl font-bold text-[#67CBE2] mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li><Link href="Home_Page" className="hover:text-[#FF4E4E]">Home</Link></li>
          <li><Link href="About_Page" className="hover:text-[#FF4E4E]">About</Link></li>
          <li><Link href="ContactUs_Page" className="hover:text-[#FF4E4E]">Contact</Link></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h2 className="text-xl font-bold text-[#67CBE2] mb-4">Contact</h2>
        <p className="text-sm font-light">
          Email: <a href="mailto:support@volera.com" className="hover:text-[#FF4E4E]">support@volera.com</a>
        </p>
        <p className="text-sm font-light">
          Phone: +1 234 567 890
        </p>
      </div>

      {/* Social Media Section */}
      <div>
        <h2 className="text-xl font-bold text-[#67CBE2] mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" className="text-xl text-[#FF4E4E] hover:text-[#67CBE2]"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com" className="text-xl text-[#FF4E4E] hover:text-[#67CBE2]"><i className="fab fa-instagram"></i></a>
          <a href="https://www.twitter.com" className="text-xl text-[#FF4E4E] hover:text-[#67CBE2]"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="mt-12 text-center text-sm">
      <p>&copy; 2024 Volera. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    )
}