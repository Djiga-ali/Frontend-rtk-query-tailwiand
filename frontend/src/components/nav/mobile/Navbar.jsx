import React from "react";
import { MdOutlineBookmarkAdded, MdOutlineCategory } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";
import { BiHomeSmile } from "react-icons/bi";
import { buttonActiveClass } from "./ProductFilter";

const Navbar = () => {
  const centerClass = "h-[3.5rem] w-[3.5rem] flex items-center justify-center";
  return (
    <div className="flex justify-center items-center fixed bottom-0 left-0 w-full h-[5.25rem] bg-white shadow-[0px_-4px_25px_rgba(0,0,0,0.04)]">
      <div className="flex gap-8">
        <button
          className={`${buttonActiveClass} ${centerClass} py-0 px-0 text-white`}
          style={{ padding: 0 }}
        >
          <BiHomeSmile fontSize={26} />
        </button>
        <button className={`${centerClass}`}>
          <MdOutlineBookmarkAdded fontSize={26} className="text-[#AAAAAA]" />
        </button>
        <button className={`${centerClass}`}>
          <CgShoppingBag fontSize={26} className="text-[#AAAAAA]" />
        </button>
        <button className={`${centerClass}`}>
          <MdOutlineCategory fontSize={26} className="text-[#AAAAAA]" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
