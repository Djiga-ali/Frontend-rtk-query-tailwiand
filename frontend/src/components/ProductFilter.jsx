import React from "react";
import { CgSearch } from "react-icons/cg";

export const buttonActiveClass =
  "bg-black bg-gradient-to-t from-black to-gray-500 text-white px-6 py-2.5 rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)]";
const buttonInactiveClass =
  "bg-gray-50 bg-gradient-to-t from-[#f1f1f1] to-gray-50 text-black px-6 py-2.5 rounded-full";

const ProductFilter = () => {
  return (
    <div className="mt-5">
      {/* Search */}
      <div className="mx-5 flex items-center gap-3 border border-gray-300 h-[2.75rem] px-3 rounded-full">
        <span>
          <CgSearch fontSize={22} className="text-gray-400" />
        </span>
        <input
          type="text"
          name="search"
          id="_search"
          placeholder="Search"
          className="focus:outline-none"
        />
      </div>
      {/* Filter */}
      {/* overflow-auto ou overflow-x-scroll */}
      <div className="flex gap-3 px-4 py-5 overflow-auto  no-scrollbar">
        <button className={buttonActiveClass}>Bed</button>
        <button className={buttonInactiveClass}>Chair</button>
        <button className={buttonInactiveClass}>Sofa</button>
        <button className={buttonInactiveClass}>Recliner</button>
        <button className={buttonInactiveClass}>Sofa</button>
        <button className={buttonInactiveClass}>Recliner</button>
      </div>
    </div>
  );
};

export default ProductFilter;
