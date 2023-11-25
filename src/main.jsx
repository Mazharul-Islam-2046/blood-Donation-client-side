import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './Providers/AuthProvider.jsx';
import Home from './Pages/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
