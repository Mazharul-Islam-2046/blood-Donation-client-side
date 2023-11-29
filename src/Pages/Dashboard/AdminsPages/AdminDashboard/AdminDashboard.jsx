import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import {
  MonetizationOn,
  PeopleAlt,
  VolunteerActivism,
} from "@mui/icons-material";
import MyRequestsWelcomTable from "./MyRequestsWelcomTable";
import useAdmin from "../../../../Hooks/useAdmin";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { allUsers, allDonationReqs } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  return (
    <div className="mb-20 mt-8">
      <h1 className="text-xl md:text-4xl font-bold mb-10 ml-2 text-center">
        Welcome To The Dashboard
      </h1>

      <MyRequestsWelcomTable />
      <div className="flex justify-center mt-5 mb-16 ">
        <button className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4">
          <Link to="/dashboard/all-blood-donation-request">View All</Link>
        </button>
      </div>

      {isAdmin && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          {/* Card 1 */}
          <div className="flex flex-col py-8 px-1 md:px-5 text-center items-center bg-slate-400">
            <h2 className="text-xl md:text-4xl font-bold mb-6 text-white">Total Users</h2>
            <div className="flex justify-center items-center">
              <PeopleAlt fontSize="large" />
              <p className="text-xl md:text-4xl font-semibold">---{allUsers?.length}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col py-8 px-1 md:px-5 text-center items-center bg-slate-400">
            <h2 className="text-xl md:text-4xl font-bold mb-6 text-white">
              Total Donation Request
            </h2>
            <div className="flex justify-center items-center">
              <VolunteerActivism fontSize="large" />
              <p className="text-xl md:text-4xl font-semibold">
                ---{allDonationReqs?.length}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col py-8 px-1 md:px-5 text-center items-center bg-slate-400">
            <h2 className="text-xl md:text-4xl font-bold mb-6 text-white">
              Total Funding
            </h2>
            <div className="flex justify-center items-center">
              <MonetizationOn fontSize="large" />
              <p className="text-xl md:text-4xl font-semibold">---{0}$</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
