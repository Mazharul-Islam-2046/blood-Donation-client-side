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
import AllUsers from "./Pages/Dashboard/AdminsPages/AllUsers.jsx";
import AdminRoutes from "./Providers/AdminRoutes.jsx";
import PrivateRoutes from "./Providers/PrivateRoutes.jsx";

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
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
          {
            path: "/dashboard/addDonationRequest",
            element: <AddDonation/>
          },
          {
            path: "/dashboard/profile",
            element: <UserProfile/>,
            
          },
          {
            path: "/dashboard/profile/edit",
            element: <ProfileEdit/>
          },
          {
            path: "/dashboard/all-users",
            element: <AdminRoutes><AllUsers/></AdminRoutes>
          }
        ],
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
