import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-900 text-white pt-24 pb-20 font-semibold text-lg text-center">
        <div className="flex justify-center items-center gap-3 text-gray-300 mb-4">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
        <div className="flex justify-center items-center gap-3 mb-6">
            <FaFacebookF/>
            <FaTwitter/>
            <FaTiktok/>
        </div>
        <p>Copyright © 2023 Mz. All rights reserved</p>
      </div>
      <div className="py-3 bg-white">

      </div>
    </div>
  );
};

export default Footer;
