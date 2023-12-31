import React from "react";

const Button = ({ children, handleClick }) => {
  return (
    <>
      <button className="w-20 h-10" onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
