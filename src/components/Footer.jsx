import { FcClapperboard } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#090914] text-gray-300 p-10 border-t border-violet-900/30">
        <aside>
            <div className="flex items-center gap-2">
                  <FcClapperboard className="text-4xl" />
          
                  <a className="text-2xl font-extrabold">
                    Movie<span className="text-blue-600">Explorer</span>
                  </a>
                </div>
                <p>Your ultimate destinations for movies,<br/>TV shows and entertainment.</p>
                <div className="flex gap-4 text-2xl mt-3">
                  <FaFacebook /> <FaInstagram /><FaXTwitter /><IoLogoYoutube />
                </div>
        </aside>
 
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover hover:text-cyan-400">Movie Discovery</a>
          <a className="link link-hover hover:text-cyan-400">Trending Movies</a>
          <a className="link link-hover hover:text-cyan-400">New Releases</a>
          <a className="link link-hover hover:text-cyan-400">Movie Details</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover hover:text-cyan-400">About Us</a>
          <a className="link link-hover hover:text-cyan-400">Contact</a>
          <a className="link link-hover hover:text-cyan-400">Careers</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link link-hover hover:text-cyan-400">Terms of Use</a>
          <a className="link link-hover hover:text-cyan-400">Privacy Policy</a>
          <a className="link link-hover hover:text-cyan-400">Cookie Policy</a>
        </nav>
      </footer>

      <footer className="footer sm:footer-horizontal footer-center bg-[#05050c] text-gray-500 p-4 border-t border-violet-900/20">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Movie Explorer
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;