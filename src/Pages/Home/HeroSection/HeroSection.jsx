import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaArrowAltCircleRight } from "react-icons/fa";

const HeroSection = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-[url('https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/06/GettyImages-465489053_header-1024x575.jpg?w=1155&h=1528')] relative bg-cover">
      <div className="bg-gradient-to-l from-transparent  to-black h-[50vw] opacity-50 max-h-[700px]"></div>
      <div className="text-white absolute top-[20%] left-[10%]">
        <p className=" text-red-400 text-3xl font-semibold mb-8">
          Donate slood, save life !
        </p>
        <p className="text-6xl font-bold leading-snug mb-8">
          Donate Blood, And <br /> Ispire Others
        </p>
        <button className="text-white bg-red-500 ml-2 pt-3 pb-4 px-8 font-semibold text-xl rounded-md hover:rounded-none">
          <Link to={user ? "/search" : "/login"}>Start Now</Link>
        </button>
      </div>
      <div className="flex justify-center text-white absolute -bottom-20 z-10">
        <div className="w-1/3 bg-red-500 px-10 pt-10 pb-6 flex">
          <div>
            <h2 className="text-4xl font-bold mb-5">Join as a Donor</h2>
            <p className="text-lg font-medium mb-5">
              Join as a Donor and save life! Your blood can save a life.
              Thousands of patiants dying for bloods. Help us save their life
            </p>
          </div>
          <div className="flex items-end">
            <Link to={user? "/dashboard" : "/registration"}>
              <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
        <div className="w-1/3 bg-gray-800 px-10 pt-10 pb-6 flex">
          <div>
            <h2 className="text-4xl font-bold mb-5">Search Donor</h2>
            <p className="text-lg font-medium mb-5">
              Search donor from thousands of donors. Easy to use and comunicate.
              Search Now!
            </p>
          </div>
          <div className="flex items-end">
            <Link>
              <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
