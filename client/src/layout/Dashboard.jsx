import React from "react";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex">
        <div className="flex-grow p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
