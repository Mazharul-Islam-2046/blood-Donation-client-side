import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Home from "./Pages/Home/Home.jsx";
import LayoutMain from "./Layout/LayoutMain.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Error from "./Pages/Error/Error.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddDonation from "./Pages/Dashboard/userPages/AddDonation.jsx";
import UserProfile from "./Pages/Dashboard/userPages/Profile/UserProfile.jsx";
import ProfileEdit from "./Pages/Dashboard/userPages/Profile/ProfileEdit.jsx";
import AllUsers from "./Pages/Dashboard/AdminsPages/AllUsers/AllUsers.jsx";
import AdminRoutes from "./Providers/AdminRoutes.jsx";
import PrivateRoutes from "./Providers/PrivateRoutes.jsx";
import AllBloodDonation from "./Pages/Dashboard/AdminsPages/AllBloodDonationPage/AllBloodDonation.jsx";
import DonationEdite from "./Pages/Dashboard/AdminsPages/DonationEditPage/DonationEdite.jsx";
import AdminDashboard from "./Pages/Dashboard/AdminsPages/AdminDashboard/AdminDashboard.jsx";
import BloodDonationReq from "./Pages/BloodDonationRequests/BloodDonationReq.jsx";
import Search from "./Pages/Search/Search.jsx";
import BloodDonationReqDetails from "./Pages/BloodDonationRequests/BloodDonationReqDetails.jsx";
import VolunteerRoutes from "./Providers/VolunteerRoutes.jsx";
import AddBlogs from "./Pages/Dashboard/AdminsPages/AddBlogs/AddBlogs.jsx";
import EditBlogs from "./Pages/Dashboard/AdminsPages/EditBlogs/EditBlogs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "/dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "/dashboard/addDonationRequest",
            element: <AddDonation />,
          },
          {
            path: "/dashboard/profile",
            element: <UserProfile />,
          },
          {
            path: "/dashboard/profile/edit",
            element: <ProfileEdit />,
          },
          {
            path: "/dashboard/all-users",
            element: (
              <AdminRoutes>
                <AllUsers />
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboard/all-blood-donation-request",
            element: <VolunteerRoutes><AllBloodDonation /></VolunteerRoutes>,
          },
          {
            path: "/dashboard/edit-donation-request/:id",
            element: (
              <PrivateRoutes>
                <DonationEdite></DonationEdite>
              </PrivateRoutes>
            ),
            loader: ({ params }) =>
              fetch(
                `https://blood-donation-server-snowy.vercel.app/donationReqs/${params.id}`
              ),
          },
          {
            path: "/dashboard/content-management",
            element: <VolunteerRoutes><AddBlogs></AddBlogs></VolunteerRoutes>
          },
          {
            path: "/dashboard/edit-blogs/:id",
            element: <AdminRoutes><EditBlogs/></AdminRoutes>,
            loader: ({params}) => fetch(`https://blood-donation-server-snowy.vercel.app/blogs/${params.id}`)
          }
        ],
      },
      {
        path: "/bloodDonationReqs",
        element: <BloodDonationReq />,
        loader: () =>
          fetch(`https://blood-donation-server-snowy.vercel.app/donationReqs`),
      },
      {
        path: "/bloodDonationReqs/id/:id",
        element: <PrivateRoutes><BloodDonationReqDetails /></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(
            `https://blood-donation-server-snowy.vercel.app/donationReqs/${params.id}`
          ),
      },

      {
        path: "/search",
        element: <Search />,
      },
    ],
    errorElement: <Error />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
