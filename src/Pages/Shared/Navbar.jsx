import { useContext } from "react";
import { MdBloodtype } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-3">
      <div className="bg-red-600 pt-4 pb-5 px-8 flex  gap-4 justify-center items-center">
        <MdBloodtype className="text-4xl text-white" />
        <h2 className="text-4xl font-bold text-white text-center">
          BLD DONATION
        </h2>
      </div>
      <div className="col-span-2 bg-white py-5 px-24 flex justify-end">
        <div className="hidden md:flex gap-8 text-xl font-semibold">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-black"
            }
            to="/"
          >
            Home
          </NavLink>
          {user ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "text-black hover:text-red-600"
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "text-black hover:text-red-600"
              }
              to="/login"
            >
              Login
            </NavLink>
          )}
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-black hover:text-red-600"
            }
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-black hover:text-red-600"
            }
            to="/bloodDonationReqs"
          >
            Donation Request
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
