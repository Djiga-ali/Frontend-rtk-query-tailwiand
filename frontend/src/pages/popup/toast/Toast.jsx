import React, { useEffect, useState } from "react";
import ToastNotification from "./ToastNotification";
import Toast2 from "./Toast2";
import { myToast } from "./MyToast";

const Toast = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [success, setSuccess] = useState("success");
  const [error, setError] = useState("error");
  const [info, setInfo] = useState("info");
  const [warning, setWarning] = useState("warning");
  console.log("open:", open);

  //   const success = ;
  //   const error = ;
  //   const info = ;
  //   const warning = ;

  const message = "Message for success";
  const message2 = "Message for error";
  const message3 = "Message for info";
  const message4 = "Message for warning";

  const title = "title for success";
  const title2 = "title for error";
  const title3 = "title for info";
  const title4 = "title for warning";

  useEffect(() => {
    if (open) {
      testToast();
    }
  }, [open]);

  const testToast = () => {
    setOpen(!open);
    return myToast();
  };

  return (
    <>
      {myToast()}
      {/* {open && myToast()} */}
      {open2 && <Toast2 title={title2} type={error} message={message2} />}
      {open3 && <Toast2 title={title2} type={info} message={message3} />}
      {open4 && <Toast2 title={title2} type={warning} message={message4} />}
      <div className="flex flex-row">
        <button
          onClick={
            () => setOpen(!open)
            // myToast();
          }
          className="w-20 h-10 mt-3 ml-3 bg-blue-700 text-white"
        >
          Success
        </button>
        <button
          onClick={() => setOpen2(!open2)}
          className="w-20 h-10 mt-3 ml-3 bg-blue-700 text-white"
        >
          Danger
        </button>
        <button
          onClick={() => setOpen3(!open3)}
          className="w-20 h-10 mt-3 ml-3 bg-blue-700 text-white"
        >
          Info
        </button>
        <button
          onClick={() => setOpen4(!open4)}
          className="w-20 h-10 mt-3 ml-3 bg-blue-700 text-white"
        >
          Warning
        </button>
      </div>
    </>
  );
};

export default Toast;
