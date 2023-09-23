import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Button from "./Button";

const ToastNotification = () => {
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#5cb85c",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a danger toast component",
          backgroundColor: "#d9534f",
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a info toast component",
          backgroundColor: "#5bc0de",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a warning toast component",
          backgroundColor: "#f0ad4e",
        };
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  const deleteToast = useCallback(
    (id) => {
      const toastListItem = list.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [list, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        deleteToast(list[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [list, deleteToast]);

  return (
    <>
      <div className=" ">
        {list?.map((toast, i) => {
          console.log("toast:", toast);
          return (
            <div className="relative animate-toast">
              <div
                key={i}
                className={`absolute p-2 flex flex-col top-3 right-0 w-60 h-30 bg-[${toast.backgroundColor}] animate-toast`}
              >
                <div className="relative mb-2">
                  <button
                    onClick={() => deleteToast(toast.id)}
                    className="absolute text-white right-0 mr-3"
                  >
                    X
                  </button>
                </div>
                <p className="text-white font-bold">{toast.title}</p>
                <span className="text-white">{toast.description}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <Button handleClick={() => showToast("success")}>Success</Button>
        <Button handleClick={() => showToast("danger")}>Danger</Button>
        <Button handleClick={() => showToast("info")}>Info</Button>
        <Button handleClick={() => showToast("warning")}>Warning</Button>
      </div>
    </>
  );
};

export default ToastNotification;
