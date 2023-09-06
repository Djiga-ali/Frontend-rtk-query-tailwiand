import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import HeaderTwo from "./HeaderTwo";

const HeaderOne = () => {
  return (
    <>
      <div className="md:flex hidden flex-col  bg-neutral-100  ">
        <div className="flex flex-1">
          <div className="flex flex-row">
            <div className="flex flex-row">
              <span>Web: Log</span>
              <span>Text</span>
            </div>
            <div>Search</div>
            <div>heart</div>
            <div>cart</div>
            <div>Login</div>
            <div>register</div>
            <div>Avatar</div>
          </div>
        </div>
        <div className=" flex flex-row">
          <div>Sidebar</div>
          <div>outlet</div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex  flex-col  bg-neutral-100  ">
        <div className="flex flex-1">
          <div className="flex flex-row">
            <div className="flex flex-row">
              <span>Mobile: Log</span>
              <span>Text</span>
            </div>
            <div>Search</div>
            <div>heart</div>
            <div>cart</div>
            <div>Login</div>
            <div>register</div>
            <div>Avatar</div>
          </div>
        </div>
        <div className=" flex flex-row">
          <div>Sidebar</div>
          <div>outlet</div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
