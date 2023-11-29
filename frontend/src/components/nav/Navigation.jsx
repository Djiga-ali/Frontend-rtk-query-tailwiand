import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import DropdownMenu from "../dropdown/DropdownMenu";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex flex-row justify-between w-[25rem]">
      <Link to="/wishlist" className="relative ml-4 cursor-pointer">
        <AiOutlineHeart size={25} className="mt-4" />
        <span className="absolute ml-4  min-w-6 w-6 h-6 mt-2  top-0  rounded-full bg-sky-500 ">
          <p className="text-xs text-center font-bold text-white mt-1">10</p>
        </span>
      </Link>
      <Link to="/cart" className="relative ml-4 cursor-pointer">
        <LiaShoppingBagSolid size={25} className="mt-4" />
        <span className="absolute  min-w-6 w-6 h-6 ml-4  mt-2  top-0 rounded-full bg-sky-500">
          <p className="text-xs text-center font-bold text-white mt-1">1</p>
        </span>
      </Link>

      <div className="flex flex-row pr-2">
        <button className="mr-3">Register</button>
        <button className="mr-3 ml-4">Login</button>
        {/* <span className="mr-2 mt-2 text-lg font-bold">Hakizimana</span> */}
        {/* <div className="w-10 h-10 rounded-full bg-white">
      <img src={Avatat} alt="" className="" />
    </div> */}
        <DropdownMenu />
      </div>
    </div>
  );
};

export default Navigation;
