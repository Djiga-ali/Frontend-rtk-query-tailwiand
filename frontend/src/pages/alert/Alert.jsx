import React from "react";
import { variants } from "./variants";
import Toast from "./Toast";

const Alert = () => {
  return (
    <div>
      {" "}
      {variants.map((variant) => (
        <Toast variant={variant} />
      ))}
    </div>
  );
};

export default Alert;
