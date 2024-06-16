import React from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5"; // Example icons from react-icons
import { Menu } from "@headlessui/react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    navigate("/onboarding");
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button (hidden on larger screens) */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Menu.Icon
                // as={MenuIcon}
                className="block h-6 w-6"
                aria-hidden="true"
              />
            </Menu.Button> */}
          </div>
          {/* Logo (centered on larger screens) */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link
                to="/user/workspace"
                className="text-2xl font-bold text-gray-900"
              >
                AIJobSage
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Add more navigation links here if needed */}
              </div>
            </div>
          </div>
          {/* User profile and sign out (right-aligned) */}
          <div className="flex items-center">
            <div className="hidden sm:block sm:ml-4">
              <Link
                to="/user/profile"
                className="text-sm text-gray-700 hover:bg-gray-200 rounded px-3 py-2"
              >
                <IoPersonOutline className="inline-block h-6 w-6 mr-1" />
                Profile
              </Link>
              <button
                className="text-sm text-gray-700 hover:bg-gray-200 rounded px-3 py-2 ml-2"
                onClick={handleSignOut}
              >
                <IoLogOutOutline className="inline-block h-6 w-6 mr-1" />
                Sign Out
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative">
                <div>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={`${user.user.githubProfile}.png`}
                    alt="Github Profile"
                  />
                  {/* <IoPersonOutline className="block h-8 w-8 rounded-full" /> */}
                </div>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
