import React, { useContext } from "react";
import { variants } from "./variants";
import Toast from "./Toast";

const Alert = () => {
  return (
    <div>
      {variants.map((variant) => (
        <Toast variant={variant} />
      ))}
      <div className="">
        <h1>Hello monsterlessons</h1>

        <button
          className="w-40 h-10 bg-blue-700 ml-2"
          onClick={() => showAlert("danger", "message for danger")}
        >
          Show danger
        </button>
        <button
          className="w-40 h-10 bg-blue-700 ml-2"
          onClick={() => showAlert("success", "message for success")}
        >
          Show success
        </button>
        <button
          className="w-40 h-10 bg-blue-700 ml-2"
          onClick={() => showAlert("info", "message for success")}
        >
          Show Info
        </button>
        <button
          className="w-40 h-10 bg-blue-700 ml-2"
          onClick={() => showAlert("warning", "message for success")}
        >
          Show warning
        </button>
      </div>
    </div>
  );
};

export default Alert;
