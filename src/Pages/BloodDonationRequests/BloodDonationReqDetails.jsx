import { MdBloodtype } from "react-icons/md";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate, CiHospital1 } from "react-icons/ci";
import { LocationCity, LocationCityTwoTone } from "@mui/icons-material";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const BloodDonationReqDetails = () => {
  const donationData = useLoaderData();
    const [axiosPublic] = useAxiosPublic();
    const {userData} = useContext(AuthContext)
    const name = userData?.name
    const email = userData?.email

    const navigate = useNavigate();

  const handleDonate = (action) => {
    const status = {
        status: action,
        donorName: name,
        donorEmail: email
    }
    axiosPublic.patch(`/donationReq/inprogress/${donationData._id}`, status)
    .then(data => {
        if (data) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Donation Request Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
        }
    })
  }

  


  return (
    <div>
      <Navbar />
      <div className="bg-gray-800 py-16">
        <h1 className="text-xl md:text-4xl font-bold text-center text-white">
          Donation Details
        </h1>
        <div className="bg-white w-1/2 grid grid-cols-2 my-8 mx-auto pt-10 pb-7 px-6 rounded-md">
          <div className="border-r-2 pr-6 border-gray-800">
          <h1 className="text-3xl font-bold">
            {donationData.requesterName}
          </h1>
          <p>
            {donationData.requesterEmail}
          </p>
          <h2 className="text-xl mb-4 mt-2">
            Recipent Name: {donationData.recipentName}
          </h2>
          <div className="flex items-center">
            <MdBloodtype />
            <p className="text-lg font-semibold">
              Blood Group: {donationData.bloodGroup}
            </p>
          </div>
          <div className="flex gap-6 mt-1">
            <div className="flex gap-1 items-center">
              <FaLocationDot />
              <p>{donationData.addressName}</p>
            </div>
            <div className="flex items-center gap-1">
              <CiCalendarDate />
              <p>{donationData.donationDate}</p>
            </div>
          </div>
          </div>
          <div className="pl-8">
                <div className="flex items-center gap-3">
                    <LocationCity/>
                <h2 className="text-xl font-semibold">
                   District: {donationData.recipentDistrict}
                </h2>
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <LocationCityTwoTone/>
                    <h2 className="text-xl font-semibold">
                    Upazila: {donationData.recipentUpazila}
                    </h2>
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <CiHospital1/>
                    <h2 className="text-xl font-semibold">
                        Hospital: {donationData.hospitalName}
                    </h2>
                </div>
                <h2 className="text-xl font-semibold mt-8">
                    Status: {donationData.status}
                </h2>
          </div>
          
          {
            donationData.status !== "pending" ? <button onClick={()=>handleDonate("inprogress")} disabled className="mt-6 col-span-2 py-2 px-6 bg-red-400 hover:bg-gray-800 text-white">
            Donate
          </button>
          :
          <button onClick={()=>handleDonate("inprogress")} className="mt-6 col-span-2 py-2 px-6 bg-red-400 hover:bg-gray-800 text-white">
            Donate
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BloodDonationReqDetails;
