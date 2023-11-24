import React, { useEffect, useState } from "react";

const myToast = () => {};
const Toast2 = ({ title, type, message }) => {
  const [open, setOpen] = useState(true);

  console.log("open:", open);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(false);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [type, message]);
  return (
    <>
      {open && (
        <>
          <div className="relative" role="alert">
            <div
              className={`${
                type === "success"
                  ? "bg-green-700 text-white"
                  : type === "error"
                  ? "bg-red-700 text-white"
                  : type === "info"
                  ? "bg-orange-300 text-white"
                  : type === "warning"
                  ? "bg-blue-400 text-white"
                  : "bg-white text-black"
              } w-[300px] h-[50px] rounded-lg absolute m-auto left-0 right-0 flex justify-center items-center`}
            >
              {/* <div className="w-full h-1/6 border border-b-5 border-b-white ">
            <h1 className="text-sm">{title}</h1>
          </div> */}

              <h1>{message}</h1>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Toast2;
