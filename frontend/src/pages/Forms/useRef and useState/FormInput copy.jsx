import React from "react";

const FormInput = (props) => {
  return (
    <div className="flex flex-col w-[280px]">
      <label htmlFor=""> {props.placeholder} </label>
      {/* with Ref */}
      <input
        className="p-3 mx-3"
        ref={props.refer}
        placeholder={props.placeholder}
      />
      {/* with useState */}
      {/* <input
        className="p-3 mx-3"
        placeholder={props.placeholder}
        onChange={(e) => props.setUsername(e.target.value)}
      /> */}
    </div>
  );
};

export default FormInput;
