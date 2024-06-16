import React from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5"; // Example icons from react-icons
import { Menu } from "@headlessui/react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Chip,
} from "@nextui-org/react";

const NavbarComponent = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    navigate("/onboarding");
  };

  return (
    // <nav className="bg-white shadow">
    //   <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex items-center justify-between h-16">
    //       {/* Mobile menu button (hidden on larger screens) */}
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         {/* <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //           <Menu.Icon
    //             // as={MenuIcon}
    //             className="block h-6 w-6"
    //             aria-hidden="true"
    //           />
    //         </Menu.Button> */}
    //       </div>
    //       {/* Logo (centered on larger screens) */}
    //       <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    //         <div className="flex-shrink-0">
    //           <Link
    //             to="/user/workspace"
    //             className="text-2xl font-bold text-gray-900"
    //           >
    //             AIJobSage
    //           </Link>
    //         </div>
    //         <div className="hidden sm:block sm:ml-6">
    //           <div className="flex space-x-4">
    //             {/* Add more navigation links here if needed */}
    //           </div>
    //         </div>
    //       </div>
    //       {/* User profile and sign out (right-aligned) */}
    //       <div className="flex items-center">
    //         <div className="hidden sm:block sm:ml-4">
    //           <Link
    //             to="/user/profile"
    //             className="text-sm text-gray-700 hover:bg-gray-200 rounded px-3 py-2"
    //           >
    //             <IoPersonOutline className="inline-block h-6 w-6 mr-1" />
    //             Profile
    //           </Link>
    //           <button
    //             className="text-sm text-gray-700 hover:bg-gray-200 rounded px-3 py-2 ml-2"
    //             onClick={handleSignOut}
    //           >
    //             <IoLogOutOutline className="inline-block h-6 w-6 mr-1" />
    //             Sign Out
    //           </button>
    //         </div>
    //         <div className="flex gap-4 items-center">
    //           <Avatar
    //             isBordered
    //             radius="sm"
    //             src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <Navbar className="bg-white shadow p-2">
      <Chip color="warning" variant="dot">
        Alpha Version
      </Chip>
      <NavbarBrand>
        <Link to={"/user/workspace"} className="font-bold text-inherit">
          AIJobSaga
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to={"/user/profile"} color="foreground" href="/user/profile">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform h-12 w-12"
              color="secondary"
              name={user.user.name}
              size="sm"
              src={`${user.user.githubProfile}.png`}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user.user.email}</p>
            </DropdownItem>
            <DropdownItem onClick={handleSignOut} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
