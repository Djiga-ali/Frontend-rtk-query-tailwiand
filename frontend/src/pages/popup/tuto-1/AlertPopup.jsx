import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useToast } from "./alertContext";
import AlertComponent from "./AlertComponent";
// import { showError, showInfo, showSuccess, showWarning } from "./Utils";

const AlertPopup = () => {
  const [pop, setPop] = useState(false);
  // this can be anywhere in the app because we use context
  const {
    showSuccess,
    showError,
    showInfo,
    showWarning,
    openModal,
    setOpenModal,
    openModal2,
    setOpenModal2,
    openModal3,
    setOpenModal3,
  } = useToast();

  // *********
  useEffect(() => {
    popup();
  }, []);

  const popup = () => {
    setPop(true);
    showSuccess("message for pop test");
  };

  return (
    <div className="">
      <div className="z-0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et sit
          repellat eos inventore autem in vero. Consectetur dolores natus
          excepturi, et incidunt nesciunt totam rem veritatis tempora,
          voluptates illum!
        </p>
      </div>
      <button
        className="w-40 h-10 bg-blue-700 ml-2 text-white"
        onClick={() => {
          showError("message for error"), setOpenModal(true);
        }}
      >
        Show danger
      </button>
      <button
        className="w-40 h-10 bg-blue-700 ml-2 text-white"
        onClick={() => {
          showSuccess("message for success"), setOpenModal(true);
        }}
      >
        Show success
      </button>
      <button
        className="w-40 h-10 bg-blue-700 ml-2 text-white"
        onClick={() => {
          showInfo("message for Info"), setOpenModal(true);
        }}
      >
        Show Info
      </button>
      <button
        className="w-40 h-10 bg-blue-700 ml-2 text-white"
        onClick={() => {
          showWarning("message for warning"), setOpenModal(true);
        }}
      >
        Show warning
      </button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AlertPopup;
