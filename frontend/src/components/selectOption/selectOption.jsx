import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import Avatat from "../../assets/user.png";
import ReactCountryFlag from "react-country-flag";

const SelectOption = () => {
  const options = [
    { value: "Abe", label: "Abe", customAbbreviation: { Avatat } },
    { value: "John", label: "John", customAbbreviation: { Avatat } },
    { value: "Dustin", label: "Dustin", customAbbreviation: { Avatat } },
  ];

  const formatOptionLabel = ({ value, label, customAbbreviation }) => (
    <div style={{ display: "flex" }}>
      <div>{label}</div>
      <div style={{ marginLeft: "10px", color: "#ccc" }}></div>
    </div>
  );

  const CustomControl = () => (
    <Select
      defaultValue={options[0]}
      formatOptionLabel={formatOptionLabel}
      options={options}
    />
  );

  return (
    <>
      <CustomControl />
    </>
  );
};

export default SelectOption;
