import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BiSolidMessage } from "react-icons/bi";
import { FaEnvelope, FaBars } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const DashSidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open
          ? "w-[25%] h-full xxs:w-[10%] xxs:bg-blue-600 xxs:rounded-l-2xl xxs:text-white  xs:bg-blue-600 xs:rounded-l-2xl xs:text-white xs:w-[10%] sm:bg-blue-600 sm:rounded-l-2xl sm:text-white sm:w-[10%] md:w-[25%] md:bg-white md:rounded-l-2xl md:text-black"
          : "w-auto bg-blue-600 rounded-l-2xl text-white"
        // : "w-[10%] md:w-[10%]  lg:w-[7%] xl:w-[4%] "
      }`}
    >
      <div className="w-full flex flex-row p-3 cursor-pointer">
        <Link to="/">
          <FaBars className="text-[30px] xxs:text-[10px] xs:text-[20px] sm:text-[30px] md:text-[30px]" />
        </Link>
        <Link
          to="/"
          className={`${
            open ? "ml-2 xxs:hidden xs:hidden sm:hidden md:flex" : "hidden"
          }`}
        >
          Logo Shram
        </Link>
      </div>
      <div className="w-full flex flex-row p-3 ">
        <span className="mr-3" onClick={() => setOpen(!open)}>
          <FaBars className="text-[30px] xxs:text-[10px] xs:text-[20px] sm:text-[30px] md:text-[30px]" />
        </span>
        <span
          className={`${
            open ? "mt-1 xxs:hidden xs:hidden sm:hidden md:flex" : "hidden"
          }`}
        >
          Dashboard
        </span>
      </div>
      <div className="flex flex-col w-full h-[80%] p-3 overflow-y-auto no-scrollbar">
        <div className="flex flex-row">
          <Link to="#" className="">
            <BiSolidMessage className="text-gray-300 text-3xl" />
          </Link>
          <Link
            to="#"
            className={`${
              open ? "ml-3 xxs:hidden xs:hidden sm:hidden md:flex" : "hidden"
            }`}
          >
            Products
          </Link>
        </div>

        <Link to="#" className="flex flex-row">
          <span className="">
            <BiSolidMessage className="text-gray-300 text-3xl" />
          </span>
          <span
            className={`${
              open ? "ml-3 xxs:hidden xs:hidden sm:hidden md:flex" : "hidden"
            }`}
          >
            Products
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DashSidebar;
