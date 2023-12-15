import React, { useState } from "react";
import { BiSolidMessage } from "react-icons/bi";
import { FaEnvelope, FaBars } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const Dashbord = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="w-full bg-blue-200 h-screen p-4">
        <div className="w-full h-full bg-white rounded-2xl flex flex-row">
          <div
            className={`${
              open
                ? "w-[25%] h-full xxs:w-[10%] xxs:bg-blue-600 xxs:rounded-l-2xl xxs:text-white  xs:bg-blue-600 xs:rounded-l-2xl xs:text-white xs:w-[10%] sm:bg-blue-600 sm:rounded-l-2xl sm:text-white sm:w-[10%] md:w-[25%] md:bg-white md:rounded-l-2xl md:text-black"
                : "w-auto bg-blue-600 rounded-l-2xl text-white"
              // : "w-[10%] md:w-[10%]  lg:w-[7%] xl:w-[4%] "
            }`}
          >
            <div className="w-full flex flex-row p-3 ">
              <span className="mr-3" onClick={() => setOpen(!open)}>
                <FaBars className="text-[30px] xxs:text-[10px] xs:text-[20px] sm:text-[30px] md:text-[30px]" />
              </span>
              <span
                className={`${
                  open
                    ? "mt-1 xxs:hidden xs:hidden sm:hidden md:flex"
                    : "hidden"
                }`}
              >
                Dashboard
              </span>
            </div>
          </div>
          <div className="w-full h-full bg-blue-50 rounded-r-2xl p-2">
            <div className="w-full flex flex-row pt-4">
              <div className=" w-[75%] h-10 xxs:w-[45%] xs:w-[55%] sm:w-[65%] md:w-[75%]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-full rounded-full border border-blue-200"
                />
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
                    <IoIosNotifications className="text-blue-400" />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
