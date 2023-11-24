import React, { useContext } from "react";
import AlertContext from "./alertContext";
import { MdErrorOutline } from "react-icons/md";
import { GrValidate } from "react-icons/gr";
import { IoWarningOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const alertStyles = " rounded-lg text-lg font-normal w-[300px] h-[50px] ";

const success = " bg-green-400";

const info = " bg-blue-100";

const warning = " bg-yellow-200";

const danger = " bg-red-400";

const AlertComponent = () => {
  const [alert] = useContext(AlertContext);

  if (!alert) {
    return null;
  }

  console.log("alert", alert?.type);
  return (
    <>
      <div className="rounded-lg  flex flex-row justify-center items-center ">
        <div
          className={`${
            alert?.type === "success"
              ? success
              : alert?.type === "danger"
              ? danger
              : alert?.type === "info"
              ? info
              : alert?.type === "warning"
              ? warning
              : ""
          } ${alertStyles} flex flex-row `}
        >
          {/* <div className="w-6 h-full bg-white mr-2 ml-[-2px] flex justify-center items-center border border-3 border-blue-700"> */}
          <div className="w-8  rounded-l rounded-lg h-full  flex justify-center items-center border border-r border-3">
            {/* <div className="w-full h-full bg-red-900"></div>
            <div className="w-full h-full bg-white"></div>
            <div className="w-full h-full bg-green-500"></div> */}
            {alert?.type === "success" ? (
              <span>
                <IoCheckmarkDoneCircleOutline className="text-white font-bold" />
              </span>
            ) : alert?.type === "danger" ? (
              <span>
                <MdErrorOutline className="text-white font-bold" />
              </span>
            ) : alert?.type === "info" ? (
              <span>
                <MdErrorOutline className="text-white font-bold" />
              </span>
            ) : alert?.type === "warning" ? (
              <span>
                <IoWarningOutline className="text-white font-bold" />
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="min-w-full h-auto py-3 flex justify-center items-center ">
            <div className="w-full h-auto mt-3 mb-2 flex justify-center items-center ">
              <span className="text-center text-white text-sm  ">
                {alert.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertComponent;
