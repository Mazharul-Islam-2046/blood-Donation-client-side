import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './Providers/AuthProvider.jsx';
import Home from './Pages/Home/Home.jsx';
import LayoutMain from './Layout/LayoutMain.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Error from './Pages/Error/Error.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>,
        children: [
          {
            
          }
        ]
      }
    ],
    errorElement:<Error/>
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
