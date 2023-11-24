import React, { useContext, useState } from "react";
import { useToast } from "./alertContext";
import { MdErrorOutline } from "react-icons/md";
import { GrValidate } from "react-icons/gr";
import { IoWarningOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import Toastmodal from "./Toastmodal";

const alertStyles = " rounded-lg text-lg font-normal w-[300px] h-[50px] ";

const success = " bg-lime-700";

const info = " bg-cyan-400";

const warning = " bg-amber-500 ";

const error = " bg-red-600";

const AlertComponent = () => {
  // const [openModal, setOpenModal] = useState(false);
  // const [openModal2, setOpenModal2] = useState(false);
  // const [openModal3, setOpenModal3] = useState(false);

  const {
    type,
    openModal,
    setOpenModal,
    openModal2,
    setOpenModal2,
    openModal3,
    setOpenModal3,
  } = useToast();

  if (!type) {
    return null;
  }

  console.log("alert", type);
  return (
    <>
      <Toastmodal isVisible={openModal} close={() => setOpenModal(false)}>
        <div className="inset-0 z-50 rounded-lg  flex flex-row justify-center items-center ">
          <div
            className={`${
              type?.success === true
                ? success
                : type?.error === true
                ? error
                : type?.info === true
                ? info
                : type?.warning === true
                ? warning
                : ""
            } ${alertStyles} flex flex-row relative `}
          >
            {/* <div className="w-6 h-full bg-white mr-2 ml-[-2px] flex justify-center items-center border border-3 border-blue-700"> */}
            <div className="w-10 px-1   h-full  flex justify-center items-center  border-r border-3">
              {/* <div className="w-full h-full bg-red-900"></div>
            <div className="w-full h-full bg-white"></div>
            <div className="w-full h-full bg-green-500"></div> */}
              {type.success ? (
                <span>
                  <IoCheckmarkDoneCircleOutline className="text-white font-bold" />
                </span>
              ) : type.error ? (
                <span>
                  <MdErrorOutline className="text-white font-bold" />
                </span>
              ) : type.info ? (
                <span>
                  <MdErrorOutline className="text-white font-bold" />
                </span>
              ) : type.warning ? (
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
                  {type.text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Toastmodal>
    </>
  );
};

export default AlertComponent;
