import React, { useState } from "react";

const Modal = ({ isVisible, close, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") close();
  };
  return (
    <>
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
      >
        <div className="w-[600px] flex flex-col">
          <button onClick={close} className="text-white text-xl place-self-end">
            X
          </button>
          <div className="bg-white p-2 rounded">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
