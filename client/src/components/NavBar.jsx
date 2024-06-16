import React from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
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
import { toast } from "sonner";

const NavbarComponent = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    navigate("/onboarding");
    toast.warning("Bye-bye for now!");
  };

  return (
    <Navbar className="bg-white shadow p-2 flex flex-row items-center ">
      <div className="flex flex-row gap-8">
        <Chip color="warning" variant="dot" className="animate-pulse">
          Alpha Version
        </Chip>

        <NavbarBrand>
          <Link to="/user/workspace" className="font-bold text-inherit">
            AIJobSaga
          </Link>
        </NavbarBrand>
      </div>
      <div className="">
        <NavbarContent as="div" justify="end">
          <Link
            to="/user/profile"
            className="text-gray-700 hover:bg-gray-200 rounded px-3 py-2"
          >
            Profile
          </Link>
          <Avatar
            as="button"
            className="h-10 w-10"
            color="secondary"
            name={user.user.name}
            size="sm"
            src={`${user.user.githubProfile}.png`}
          />

          <IoLogOutOutline
            onClick={handleSignOut}
            className="inline-block h-6 w-6 mr-1 cursor-pointer"
          />
        </NavbarContent>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
