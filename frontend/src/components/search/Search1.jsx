import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FcBullish } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBasketFill } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxAvatar } from "react-icons/rx";
import Avatat from "../../assets/user.png";
import BdiFlag from "../../assets/burundi.png";
import DropdownMenu from "../dropdown/DropdownMenu";

const Search = () => {
  return (
    <>
      <div className="bg-white">
        <div className="bg-white h-16 px-4  flex items-center border-b border-gray-200 justify-between">
          <div className="flex flex-row ">
            <FcBullish size={24} />
            <span className="ml-4 "> OpenShop</span>
          </div>
          {/* search  */}
          <div className="flex flex-row">
            <div className="relative mr-4 w-[30rem]  border border-gray-300  rounded-full">
              <HiOutlineSearch
                fontSize={20}
                // "-translate-y-": https://tailwindcss.com/docs/translate
                //"top": https://tailwindcss.com/docs/top-right-bottom-left
                className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Search..."
                className="text-sm focus:outline-none  active:outline-none   w-[25rem] h-10 ml-12 rounded-sm"
              />
            </div>

            <button className="rounded-full bg-cyan-400 w-[8rem] h-10">
              Tafuta
            </button>
          </div>

          <div className="flex flex-row justify-between w-[25rem]">
            <div className="relative">
              <AiOutlineHeart size={25} className="mt-2" />
              <span className="absolute ml-4  min-w-6 w-6 h-6  top-0  rounded-full bg-sky-500 ">
                <p className="text-xs text-center font-bold text-white mt-1">
                  10
                </p>
              </span>
            </div>
            <div className="relative ml-4">
              <LiaShoppingBagSolid size={25} className="mt-2" />
              <span className="absolute  min-w-6 w-6 h-6 ml-4   top-0 rounded-full bg-sky-500">
                <p className="text-xs text-center font-bold text-white mt-1">
                  1
                </p>
              </span>
            </div>

            <div className="flex flex-row pr-2">
              <button className="mr-3 ml-4">Login</button>
              <button className="mr-3">Register</button>
              {/* <span className="mr-2 mt-2 text-lg font-bold">Hakizimana</span> */}
              {/* <div className="w-10 h-10 rounded-full bg-white">
                <img src={Avatat} alt="" className="" />
              </div> */}
              <DropdownMenu />
            </div>
          </div>
        </div>
        {/* search filter buttons  */}
        <div className="relative flex flex-row p-2 border-b border-gray-200 justify-between">
          <span className="text-lg font-bold ">search filters</span>
          {/* Countries */}
          <select
            id="cars"
            className="appearance-none rounded-full border    bg-cyan-400 w-[9rem] h-8 absoluteitems-center justify-center focus:outline-none ml-4 "
          >
            <option className="bg-white text-sm font-semibold">country</option>
            <option value="saab" className="bg-white  text-sm font-semibold">
              Saab
            </option>
            <option value="opel" className="bg-white text-sm font-semibold">
              Opel
            </option>
            <option value="audi" className="bg-white text-sm font-semibold">
              Audi
            </option>
          </select>
          {/* States */}
          <select
            id="cars"
            className="appearance-none rounded-full border    bg-cyan-400 w-[9rem] h-8 absoluteitems-center justify-center focus:outline-none ml-4 "
          >
            <option className="bg-white text-sm font-semibold">
              Choose country
            </option>
            <option value="saab" className="bg-white  text-sm font-semibold">
              Saab
            </option>
            <option value="opel" className="bg-white text-sm font-semibold">
              Opel
            </option>
            <option value="audi" className="bg-white text-sm font-semibold">
              Audi
            </option>
          </select>
          {/* cities */}
          <select
            id="cars"
            className="appearance-none rounded-full border    bg-cyan-400 w-[9rem] h-8 absoluteitems-center justify-center focus:outline-none ml-4 "
          >
            <option className="bg-white text-sm font-semibold">
              Choose country
            </option>
            <option value="saab" className="bg-white  text-sm font-semibold">
              Saab
            </option>
            <option value="opel" className="bg-white text-sm font-semibold">
              Opel
            </option>
            <option value="audi" className="bg-white text-sm font-semibold">
              Audi
            </option>
          </select>
          {/* actions */}
          <select
            id="cars"
            className="appearance-none rounded-full border    bg-cyan-400 w-[9rem] h-8 absoluteitems-center justify-center focus:outline-none ml-4 "
          >
            <option className="bg-white text-sm font-semibold">
              Choose country
            </option>
            <option value="saab" className="bg-white  text-sm font-semibold">
              Saab
            </option>
            <option value="opel" className="bg-white text-sm font-semibold">
              Opel
            </option>
            <option value="audi" className="bg-white text-sm font-semibold">
              Audi
            </option>
          </select>
          {/* Types */}
          <select
            id="cars"
            className="appearance-none rounded-full border     bg-cyan-400 hover:bg-cyan-400 w-[9rem] h-8 absoluteitems-center justify-center focus:outline-none ml-4 "
          >
            <option className="bg-white hover:bg-cyan-400 text-sm font-semibold">
              Choose country
            </option>
            <option
              value="saab"
              className="bg-white hover:bg-cyan-400  text-sm font-semibold"
            >
              Saab
            </option>
            <option value="opel" className="bg-white text-sm font-semibold">
              Opel
            </option>
            <option value="audi" className="bg-white text-sm font-semibold">
              Audi
            </option>
          </select>

          {/* Open shop */}

          <button className="rounded-full bg-red-400 w-[10rem] h-8 text-lg font-bold text-white">
            Fungua duka loka
          </button>
        </div>
        {/* end  search filter buttons  */}
      </div>
    </>
  );
};

export default Search;
