import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white py-5 px-5 flex justify-between items-center">
      <span className="cursor-pointer">
        <HiMenuAlt1 fontSize={32} />
      </span>
      <div className="bg-gray-200 w-[2.75rem] h-[2.75rem] rounded-full cursor-pointer">
        <img
          src="https://source.unsplash.com/200x200?face"
          alt=""
          className="rounded-full w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
