// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import { FaLocationDot } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

import { Link, useLoaderData } from "react-router-dom";
import TopBar from "../Home/TopBar/TopBar";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer/Footer";

import { Helmet } from "react-helmet";

const BloodDonationReq = () => {
  const allDonationReqs = useLoaderData();
  console.log(allDonationReqs);
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Blood Donation || Donation Request</title>
      </Helmet>
      <TopBar />
      <Navbar />

      <div className=" bg-gray-700">
        <h3 className="text-5xl text-white font-bold text-center pt-20">All Donation Requests</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 py-20 px-16 gap-x-4 gap-y-4">
        {allDonationReqs.map((allDonationReq, idx) => (
          <div key={idx} className="bg-white pt-10 pb-7 px-6 rounded-md">
            <h1 className="text-3xl font-bold mb-4">
              {allDonationReq.requesterName}
            </h1>
            <div className="flex items-center">
              <MdBloodtype />
              <p className="text-lg font-semibold">
                Blood Group: {allDonationReq.bloodGroup}
              </p>
            </div>
            <div className="flex gap-6 mt-1">
              <div className="flex gap-1 items-center">
                <FaLocationDot />
                <p>{allDonationReq.addressName}</p>
              </div>
              <div className="flex items-center gap-1">
                <CiCalendarDate/>
                <p>{allDonationReq.donationDate}</p>
              </div>
            </div>

            <button className="mt-6 py-2 px-6 bg-red-400 hover:bg-gray-800 text-white"><Link to={`/bloodDonationReqs/id/${allDonationReq._id}`}>View Details</Link></button>
          </div>
        ))}
      </div>
      </div>

      <Footer/>
    </>
  );
};

export default BloodDonationReq;
