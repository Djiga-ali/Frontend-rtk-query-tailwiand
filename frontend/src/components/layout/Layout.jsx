import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderTwo from "../HeaderTwo";
import Search from "../search/Search";
import Navbar from "../nav/Navbar";
import Logo from "../nav/Logo";
import Navigation from "../nav/Navigation";
import Countries from "../nav/Countries";
import ProductType from "../nav/product/ProductType";
import CateroryList from "../nav/category/CateroryList";
import Sidebar from "../nav/Sidebar";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import Header from "../nav/mobile/Header";
import Footer from "../nav/mobile/Footer";
import AlertComponent from "../../pages/popup/tuto-1/AlertComponent";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col bg-white ">
        <div className="flex-1 w-full ">
          <div className="flex-1  w-full h-7  p-y-2 ">
            <Countries />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row w-full p-y-2 ml-3">
              <Logo />
            </div>
            <div className="flex flex-row w-[200%] p-y-2">
              <Search />
            </div>
            <div className="flex flex-row w-full p-y-2">
              <Navigation />
            </div>
          </div>
        </div>
        <div className="flex-1  w-full h-7  p-y-2  border-t border-gray-300">
          <ProductType />
        </div>
        <div className="flex-1  w-full   border-t border-gray-300">
          <div className="flex flex-row">
            {/* Toggle Sidebar */}
            <div className="flex " onClick={() => setOpenMenu(!openMenu)}>
              <span
                className={!openMenu ? "hidden" : "text-lg font-bold  mr-2"}
              >
                Categories
              </span>
              {openMenu ? (
                <RiMenuFoldFill size={24} color="#000" className="mt-1" />
              ) : (
                <RiMenuUnfoldFill size={24} color="#000" className="mt-1" />
              )}
            </div>
            {/* category list */}
            <div className="w-full flex-1 ">
              <CateroryList />
            </div>
          </div>
        </div>
        <div className="flex-1  border-t border-gray-300 w-screen">
          <div className="flex flex-row w-full">
            <div className={openMenu ? "w-[20%]" : "w-0"}>
              <div className={openMenu ? "flex-1 top-0 w-full" : "w-0"}>
                <Sidebar openMenu={openMenu} />
              </div>
            </div>

            <div className=" w-full">
              <div className=" w-full">
                <AlertComponent />

                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // Mobile ************************************ */}

      <div className="md:hidden flex  flex-col bg-white">
        <div className="flex-1 w-full h-full ">
          <div className="flex-1 w-full ">
            <Countries />
          </div>
        </div>
        <div className="flex-1  w-full   border-t border-gray-300">
          <div className="flex flex-row">
            {/* Toggle Sidebar */}
            <div
              className="flex pt-3 xs:pt-1"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="text-lg font-bold "></span>
              {openMenu ? (
                <RiMenuFoldFill
                  size={24}
                  color="#000"
                  className="mt-1 xxs:mt-0"
                />
              ) : (
                <RiMenuUnfoldFill
                  size={24}
                  color="#000"
                  className="mt-1 xxs:mt-0"
                />
              )}
            </div>
            {/* category list */}
            <div className="flex flex-row w-[200%] p-y-2">
              <Search />
            </div>
          </div>
          <div className="flex-1  w-full h-10  p-y-2  border-t border-gray-300 overflow-auto scrollbar-hide">
            <ProductType />
          </div>
        </div>
        <div className="flex-1  w-full">
          <div className="flex-1">
            <div
              className={
                !openMenu
                  ? "hidden xs:hidden"
                  : "flex-1 w-full h-screen bg-slate-800 z-10 absolute"
              }
            >
              <div className="flex-1 w-40 h-full bg-white">
                <Sidebar openMenu={openMenu} />
              </div>
            </div>
            <div className="w-screen z-0  absolute ">
              <div className="w-full ">
                <AlertComponent />
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="fixed bottom-0 w-full z-40 bg-red-500 flex-1"> */}
        <div className="fixed bottom-0 w-full z-40  flex-1">
          <div className=" flex-1 w-full h-10 bg-black ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
