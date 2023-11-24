import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AlertContext from "./alertContext";
import AlertComponent from "./AlertComponent";

const AlertPopup = () => {
  const [pop, setPop] = useState(false);
  // this can be anywhere in the app because we use context
  const [, setAlert, showAlert, showSuccess] = useContext(AlertContext);
  // const showAlert = (type) => {
  //   setAlert({
  //     text: "This is a custom alert",
  //     type,
  //   });
  // };
  // *********
  useEffect(() => {
    popup();
  }, []);

  const popup = () => {
    setPop(true);
    showAlert("success", "message for pop test");
  };

  return (
    <div className="">
      <button
        className="w-40 h-10 bg-blue-700 ml-2 text-white"
        onClick={() => showAlert("danger", "message for danger")}
      >
        Show danger
      </button>
      <button
        className="w-40 h-10 bg-blue-700 ml-2 text-white"
        onClick={() => showAlert("success", "message for success")}
        // onClick={() => showSuccess("success", "message for success")}
      >
        Show success
      </button>
      <button
        className="w-40 h-10 bg-blue-700 ml-2 text-white"
        onClick={() => showAlert("info", "message for Info")}
      >
        Show Info
      </button>
      <button
        className="w-40 h-10 bg-blue-700 ml-2 text-white"
        onClick={() => showAlert("warning", "message for warning")}
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
