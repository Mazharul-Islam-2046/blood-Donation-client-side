import React, { useContext } from "react";
import { MdBloodtype } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import {
  Dashboard,
  Home,
  Login,
  Logout,
  Menu,
  RequestPage,
  Search,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="grid grid-cols-4">
      <div className="bg-red-600 pt-4 pb-5 px-8 flex  gap-4 justify-center items-center">
        <MdBloodtype className="text-4xl text-white" />
        <h2 className="text-xl md:text-4xl font-bold text-white text-center">
          BLDD
        </h2>
      </div>
      <div className="col-span-2 md:col-span-3 bg-white py-5 px-24 items-center flex justify-end">
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
          {user && (
            <button onClick={handleLogOut} className="text-black hover:text-red-600">Logout</button>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={toggleDrawer} className="flex md:hidden">
          <Menu />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <List>
            <ListItem disablePadding>
              <NavLink to="/">
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            {user ? (
              <ListItem disablePadding>
                <NavLink to="/dashboard">
                  <ListItemButton>
                    <ListItemIcon>
                      <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ) : (
              <ListItem disablePadding>
                <NavLink to="/login">
                  <ListItemButton>
                    <ListItemIcon>
                      <Login />
                    </ListItemIcon>
                    <ListItemText primary={"Login"} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            )}
            <ListItem disablePadding>
              <NavLink to="search">
                <ListItemButton>
                  <ListItemIcon>
                    <Search />
                  </ListItemIcon>
                  <ListItemText primary={"Search"} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/bloodDonationReqs">
                <ListItemButton>
                  <ListItemIcon>
                    <RequestPage />
                  </ListItemIcon>
                  <ListItemText primary={"Donation Requests"} />
                </ListItemButton>
              </NavLink>
            </ListItem>

            {user ? (
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogOut}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            ) : (
              <></>
            )}
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
