import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { photo, userData } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center text-gray-300 mt-2">
      <h2 className="text-xl md:text-4xl font-bold text-center mt-2 mb-8 text-black">Your Profile</h2>
      <div className="w-4/6 bg-red-400 grid grid-cols-2 py-8 rounded-md">
        <div className="flex flex-col justify-center items-center px-4 border-r-2 border-white">
          <img
            src={photo}
            className="w-60 h-60 mb-3 object-cover rounded-full"
            alt=""
          />
          <h2 className="text-2xl font-semibold text-center mb-2">
            {userData?.name}
          </h2>
          <p>{userData?.email}</p>
        </div>
        <div className="px-4 text-3xl flex flex-col justify-center gap-4 pl-16">
          <h1>
            <span className="font-bold">Name:</span> {userData?.name}
          </h1>
          <h1>
            <span className="font-bold">Role:</span> {userData?.role}
          </h1>
          <h1>
            <span className="font-bold">District:</span> {userData?.district}
          </h1>
          <h1>
            <span className="font-bold">Upazila:</span> {userData?.upazila}
          </h1>
          <h1>
            <span className="font-bold">Blood Group:</span>{" "}
            {userData?.bloodGroup}
          </h1>
        </div>
      </div>
      <div className="w-4/6">
        <button className="w-full py-2 bg-slate-400 rounded-md mt-4 hover:bg-gray-800 hover: text-slate-100">
          <Link to="/dashboard/profile/edit" className="text-2xl px-72">
            Edit Profile
          </Link>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
