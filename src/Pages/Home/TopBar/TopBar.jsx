import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="bg-black flex justify-center items-center gap-3 text-white text-xl py-3 px-4">
        <FaPhone className="" />
        <div className="px-2 ml-1 border-l-2 border-white">
          <p>+01 999 60799</p>
        </div>
      </div>
      <div className="bg-black flex items-center gap-3 text-white text-xl py-3 px-4">
        <IoMdMail />
        <div className="px-4 ml-1 border-l-2 border-white">
          <p>blood@Donation.com</p>
        </div>
      </div>
      <div className="bg-black flex items-center gap-3 text-white text-xl py-3 px-4">
        <FaLocationDot />
        <div className="px-4 ml-1 border-l-2 border-white">
          <p>1410 Bandar, Narayanganj</p>
        </div>
      </div>
      <div className="bg-red-600 flex items-center gap-5 text-white text-xl py-3 px-1">
        <div className="px-4 ml-1 border-r-2 border-white">
          <p>Follow Now</p>
        </div>
        <div className="flex justify-center items-center w-1/3 gap-2">
          <FaFacebookF className="bg-white text-red-600 p-1 text-2xl" />
          <FaTwitter className="bg-white text-red-600 p-1 text-2xl" />
          <FaTiktok className="bg-white text-red-600 p-1 text-2xl" />
          <FaPinterestP className="bg-white text-red-600 p-1 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
