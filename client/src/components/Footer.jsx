import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-zinc-400">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="The Loop Computers" className="h-9 w-9" />
            <h2 className="text-lg font-bold text-white">
              The Loop <span className="text-indigo-400">Computers</span>
            </h2>
          </div>
          <p className="leading-relaxed">
            Smart tech deserves a second life.  
            Trusted refurbished laptops, custom PCs & accessories.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-400" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-400" />
              <span>support@theloopcomputers.com</span>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} The Loop Computers. All rights reserved.
      </div>
    </footer>
  );
}
