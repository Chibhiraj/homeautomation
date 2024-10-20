import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
} from "@mui/material";
import CBEHome from "../locations/CBEHome";
import brand from "../img/brand.png";
// import { Home as HomeIcon, Timeline as TimelineIcon, Assignment as AssignmentIcon } from '@mui/icons-material';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer open/close

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target)
    ) {
      setProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // <Router>

    <div className="text-center">
      <div style={{ display: "flex" }}></div>

      <div
        id="hs-offcanvas-example"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 border-e border-blue-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
        style={{ backgroundColor: "#9e8a57" }}
      >
        <div className="px-6">
          <h1 style={{ color: "white", fontFamily: "Cinzel, serif" }}>
            mSmart
          </h1>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap "
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <NavLink
                to="/CBEHome"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg bg-gray-700"
                    : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                }
                style={{ color: "black", fontFamily: "Cinzel, serif" }}
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                CBE Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/CBEOffice"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg bg-gray-700"
                    : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                }
                style={{ color: "black", fontFamily: "Cinzel, serif" }}
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                CBE Office
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>

      <nav className="bg" style={{ backgroundColor: "#9e8a57" }}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="pl-16 ml-20 sm:text text-left sm:text-center">
              <h4
                className="text-white font-serif"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Welcome user
              </h4>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              <div className="relative ml-3">
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={profileMenuOpen}
                  aria-haspopup="true"
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                    alt="Profile"
                  />
                </button>
                {profileMenuOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                    ref={profileMenuRef}
                    style={{ color: "black", fontFamily: "Cinzel, serif" }}
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      Change Password
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      Support
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div
              className="space-y-1 px-2 pb-3 pt-2"
              style={{ color: "black", fontFamily: "Cinzel, serif" }}
            >
              <NavLink
                to="/CBEHome"
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-md px-3 py-2 text-base font-medium text-white bg-gray-700"
                    : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white hover:text-white"
                }
              >
                CBE Home
              </NavLink>
              <NavLink
                to="/CBEOffice"
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-md px-3 py-2 text-base font-medium text-white bg-gray-700"
                    : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              >
                CBE Office
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
    // </Router>
  );
};

export default Navbar;
