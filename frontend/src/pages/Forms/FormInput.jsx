import React from "react";

const FormInput = (props) => {
  // ...inputProps: contient -> name, type, placeholder, ...
  const { label, id, onChange, errorMessage, ...inputProps } = props;
  //   console.log("label:", label);
  return (
    <div className="flex flex-col w-[280px]">
      <label for={label}>
        {" "}
        {label}
        {/* ...inputProps: contient les props ->username, name, type, placeholder, ... */}
        <input
          // className="p-3 mx-3 border border-black invalid:border-red-500"
          className="p-3 mx-3   invalid: border-red-500 peer"
          id={label}
          // className="p-3 mx-3   invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
          {...inputProps}
          onChange={onChange}
          required
        />
        {/* https://dev.to/deyemiobaa/adding-custom-validation-to-a-form-with-tailwindcss-1e7d */}
        <span className="text-red-400 p-3 text-sm hidden peer-invalid:block ">
          {errorMessage}
          {/* Please enter a valid email address */}
        </span>
      </label>
    </div>
  );
};

export default FormInput;
