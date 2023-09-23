import React from "react";
import { useContext } from "react";
import AlertContext from "./alertContext";
import AlertComponent from "./AlertComponent";

const AlertPopup = () => {
  // this can be anywhere in the app because we use context
  const [, setAlert] = useContext(AlertContext);
  const showAlert = (type) => {
    setAlert({
      text: "This is a custom alert",
      type,
    });
  };
  // *********

  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <AlertComponent />
      <button onClick={() => showAlert("danger")}>Show danger</button>
      <button onClick={() => showAlert("success")}>Show success</button>
    </div>
  );
};

export default AlertPopup;
