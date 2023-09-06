import React from "react";
import { HiOutlineSearch, HiAdjustments } from "react-icons/hi";
import { FcBullish } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBasketFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxAvatar } from "react-icons/rx";
import DropdownMenu from "../dropdown/DropdownMenu";
import Navigation from "../nav/Navigation";
import SearchFilterButton from "./SearchFilterButton";

const Search = () => {
  return (
    <div className="flex-1 w-full mt-2">
      <div className="w-full flex relative mr-1 mb-1  border border-gray-300  rounded-full">
        <HiOutlineSearch
          fontSize={20}
          // "-translate-y-": https://tailwindcss.com/docs/translate
          //"top": https://tailwindcss.com/docs/top-right-bottom-left
          className=" flex-1 text-gray-400 absolute top-1/2  left-3 -translate-y-1/2"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full flex-1 text-sm focus:outline-none  active:outline-none xxs:h-7 xs:h-7   h-10 ml-8 rounded-sm"
        />

        <button className="xxs:hidden xs:hidden rounded-full bg-cyan-400 w-20 xs:h-7 h-10 p-2">
          Tafuta
        </button>
        {/* <FaFilter size={20} className="text-gray-400 sm:hidden mr-3 mt-3" /> */}
        <HiAdjustments
          size={20}
          className="text-gray-400 sm:hidden mr-3 mt-1"
        />
      </div>
    </div>
  );
};

export default Search;
