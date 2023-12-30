import React, { useState } from "react";
import { BiSolidMessage } from "react-icons/bi";
import { FaEnvelope, FaBars } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Dashbord = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="w-full h-full bg-blue-50 rounded-r-2xl p-2 ">
        <div className="w-full flex flex-row pt-4">
          <div className="flex flex-row justify-end items-center relative w-[75%] h-10 xxs:w-[45%] xs:w-[55%] sm:w-[65%] md:w-[75%]">
            <input
              type="text"
              name=""
              id=""
              className="w-full h-full pl-5 rounded-full border border-blue-200"
            />
            <span className="absolute text-2xl text-end pr-5 cursor-pointer">
              <IoIosSearch />
            </span>
          </div>

          <div className="w-[30%] flex flex-row justify-between ">
            {/* chat message */}
            <div className=" relative w-10 h-10 rounded-full border border-blue-200 ml-3 flex justify-center items-center">
              <div className="absolute">
                <BiSolidMessage className="text-blue-400" />
              </div>
              <span className="w-[30px]  h-[30px] rounded-full bg-red-600 mb-10 ml-5 text-center text-white text-sm p-1">
                120
              </span>
            </div>
            {/* Staff message */}
            <div className="xxs:hidden xs:visible relative w-10 h-10 rounded-full border border-blue-200 ml-3 flex justify-center items-center">
              <div className="absolute">
                <FaEnvelope className="text-blue-400" />
              </div>
              <span className="w-[30px]  h-[30px] rounded-full bg-red-600 mb-10 ml-5 text-center text-white text-sm p-1">
                120
              </span>
            </div>
            {/* Notification */}
            <div className=" relative w-10 h-10 rounded-full border border-blue-200 ml-3 flex justify-center items-center">
              <div className="absolute">
                <IoIosNotifications className="text-blue-400 " />
              </div>
              <span className="w-[30px]  h-[30px] rounded-full bg-red-600 mb-10 ml-5 text-center text-white text-sm p-1">
                120
              </span>
            </div>

            <div className="h-10  border-r border-blue-200 mx-1 xxs:hidden xs:hidden sm:visible"></div>
            <div className="flex flex-row xxs:hidden xs:hidden sm:visible">
              <div className="w-10 h-10 rounded-full border border-blue-200  bg-white"></div>
              <div className="flex justify-center items-center ml-2 xxs:hidden xs:hidden sm:hidden  md:hidden lg:hidden xl:flex">
                <span className="text-center font-bold">Username</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row gap-6 xxs:flex-col xs:flex-col ">
              <div className=" flex md:flex-row gap-6 xxs:flex-col xs:flex-col">
                <div className="flex flex-row gap-6 xxs:flex-col sm:flex-col md:flex-row">
                  <div className="xxs:w-full xxs:h-40 xs:w-full xs:h-40 sm:w-40   sm:h-40 md:w-40  md:h-40 lg:w-40  lg:h-40 xl:w-40 xl:h-40 bg-white mt-3 rounded-lg"></div>
                  <div className="xxs:w-full xxs:h-40 xs:w-full xs:h-40 sm:w-40  sm:h-40 md:w-40 md:h-40 lg:w-40  lg:h-40  xl:w-40 xl:h-40 bg-white mt-3 rounded-lg"></div>
                </div>
                <div className="  flex flex-row gap-6 xxs:flex-col sm:flex-col md:flex-row">
                  <div className="xxs:w-full xxs:h-40 xs:w-full xs:h-40 sm:w-40  sm:h-40 md:w-40 md:h-40 lg:w-40  lg:h-40 xl:w-40 xl:h-40 xxs:w-full xxs:h-40 bg-white mt-3 rounded-lg"></div>
                  <div className="xxs:w-full xxs:h-40 xs:w-full xs:h-40 sm:w-40  sm:h-40 md:w-40 md:h-40 lg:w-40  lg:h-40 w-40 xl:w-40 xl:h-40 h-40 bg-white mt-3 rounded-lg"></div>
                </div>
                <div className="flex flex-row gap-6">
                  <div className="xxs:w-full xxs:h-40 xs:w-full xs:h-40 sm:w-40  sm:h-40 md:w-40 md:h-40 lg:w-40  lg:h-40 xl:w-40 xl:h-40 w-40 h-40 bg-white mt-3 rounded-lg"></div>
                  <div className="xxs:w-full xxs:h-40 xs:w-full xs:h-40 sm:w-40  sm:h-40 md:w-40 md:h-40 lg:w-40  lg:h-40 xl:w-40 xl:h-40 w-40 h-40 bg-white mt-3 rounded-lg"></div>
                </div>
              </div>
            </div> */}
        <div className="w-full h-[90%] mt-3  overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-6 gap-x-2 gap-y-4  xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <div className="min-w-40 h-40 bg-white  rounded-lg"></div>
            <div className=" min-w-40 h-40   bg-white  rounded-lg"></div>
            <div className=" min-w-40 h-40   bg-white  rounded-lg"></div>
            <div className=" min-w-40 h-40 bg-white  rounded-lg"></div>
            <div className=" min-w-40 h-40   bg-white  rounded-lg"></div>
            <div className=" min-w-40 h-40   bg-white  rounded-lg"></div>
          </div>
          <div className="grid grid-cols-6 gap-x-2 gap-y-4 mt-3 xxs:grid grid-cols-4">
            <div className="col-span-2 min-w-40 h-40 bg-blue-400  rounded-lg  xxs:h-80">
              <div className="grid grid-cols-2 gap-2  p-2 xxs:grid-cols-1 ">
                <div className=" min-w-40 h-[145px] bg-white  rounded-lg"></div>
                <div className=" min-w-40 h-[145px] bg-white  rounded-lg"></div>
              </div>
            </div>
            <div className="col-span-2  min-w-40 h-40 bg-blue-400  rounded-lg xxs:h-80">
              <div className="grid grid-cols-2 gap-2  p-2 xxs:grid-cols-1">
                <div className=" min-w-40 h-[145px] bg-white  rounded-lg"></div>
                <div className=" min-w-40 h-[145px] bg-white  rounded-lg"></div>
              </div>
            </div>
            <div className="col-span-2 min-w-40 h-40 bg-blue-400  rounded-lg xxs:w-[270px]">
              <div className="grid grid-cols-2 gap-2  p-2 xxs:w-full">
                <div className="xxs:min-w-full h-[145px] bg-white  rounded-lg"></div>
                <div className=" xxs:min-w-full h-[145px] bg-white  rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
