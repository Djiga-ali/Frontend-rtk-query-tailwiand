import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Button from "./Button";

const ToastNotification = ({ title, type, message }) => {
  const [list, setList] = useState();
  let toastProperties = null;
  console.log("list:", list);

  if (type === "success") {
    toastProperties = {
      id: 1,
      title: title,
      description: message,
      backgroundColor: "bg-[#5cb85c]",
    };
    setList(toastProperties);
  } else if (type === "error") {
    toastProperties = {
      id: 2,
      title: title,
      description: message,
      backgroundColor: "bg-[#d9534f]",
    };
    setList(toastProperties);
  } else if (type === "info") {
    toastProperties = {
      id: 3,
      title: title,
      description: message,
      backgroundColor: "bg-[#5bc0de]",
    };
    setList(toastProperties);
  } else if (type === "warning") {
    toastProperties = {
      id: 4,
      title: title,
      description: message,
      backgroundColor: "bg-[#f0ad4e]",
    };
    setList(toastProperties);
  }

  // // useCallback est un Hook React qui vous permet de mettre en cache une définition de fonction d'un rendu à l'autre.
  // const deleteToast = useCallback(
  //   (id) => {
  //     const toastListItem = list.filter((e) => e.id !== id);
  //     setList(toastListItem);
  //   },
  //   [list, setList]
  // );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (list.length) {
  //       deleteToast(list[0].id);
  //     }
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [list, deleteToast]);

  return (
    <>
      <div className="  h-screen">
        <div className="relative animate-toast">
          <div
            className={`absolute p-2 flex flex-col top-3 right-0 w-60 h-30 ${list?.backgroundColor} animate-toast`}
          >
            <div className="relative mb-2">
              <button
                // onClick={() => deleteToast(list[0]?.id)}
                className="absolute text-white right-0 mr-3"
              >
                X
              </button>
            </div>
            <p className="text-white font-bold">{list?.title}</p>
            <span className="text-white">{list?.description}</span>
          </div>
        </div>
      </div>

      <div className="w-40 h-40 bottom-0 right-0 bg-black"></div>
    </>
  );
};

export default ToastNotification;
