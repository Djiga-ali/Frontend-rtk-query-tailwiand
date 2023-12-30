import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashSidebar from "./DashSidebar";

const DashLayout = () => {
  return (
    <div className="w-full bg-blue-200 h-screen p-4">
      <div className="w-full h-full bg-white rounded-2xl flex flex-row">
        <DashSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
