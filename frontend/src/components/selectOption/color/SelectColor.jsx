import React from "react";
import { ProductColors } from "./ProductColors";

const SelectColor = () => {
  return (
    <div className="flex-1 w-3/6  h-3/6 mt-1 ">
      <div className="flex-1 w-full h-full  ">
        <div className="grid grid-cols-7 gap-4 w-[150%] h-full bg-slate-200 p-1">
          {ProductColors?.map((color) => (
            <span
              key={color.name}
              className={`w-5 h-5 ${color.code} cursor-pointer  hover:border border-black`}
            >
              {/* {color.code} */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectColor;
