import React from "react";
import product from "../../data/product";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SlBag } from "react-icons/sl";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <>
      <div className="flex-1 mr-2">
        {/* colors : https://flowbite.com/docs/customize/colors/ */}
        <div className="flex flex-row justify-between p-2 bg-indigo-100 xxs:flex-col xs:flex-col sm:flex-col md:flex-row">
          <div className="w-4/6  mr-3 xxs:w-full xs:w-full sm:w-full md:w-4/6">
            <div className="flex flex-col w-full ">
              <div className="w-full">
                {/* cart header */}
                <div className=" flex flex-row justify-between p-2 bg-white rounded-lg border-b border-indigo-100">
                  <h1 className=" w-3/6 text-[14px] font-semibold ">Product</h1>
                
                  <h1 className="w-2/6 text-[14px] font-semibold text-end">
                    Price
                  </h1>
                  <h1 className="w-2/6 text-[14px] font-semibold text-end"></h1>
                </div>
                {/* cart items */}
                <div className="w-full    rounded-lg  bg-white">
                  {/* ******* item 1 */}
                 
                  <div className="flex flex-row w-full  justify-between p-2 bg-white rounded-lg">
                    <div className="w-3/6  ">
                      <Link to={`/detail-vertical/${product.id}`} className="w-3/6 flex flex-row">
                        <img
                          src={product?.pictures[0]?.image}
                          className="w-10 h-10 rounded-lg"
                          alt=""
                        />
                        <div className="flex flex-col ml-2">
                          <span className="text-[14px] font-semibold">
                            Name:
                          </span>
                          <small>color:</small>
                        </div>
                      </Link>
                    </div>
                    
                    <div className="w-2/6">
                      <div className="text-end ">
                        <small className=" ">300000000000000€</small>
                      </div>
                    </div>
                    <div className="w-2/6 flex flex-row p-2">
                      <div className=" relative w-full text-end   ">
                      <div className=" w-full flex  justify-center items-center absolute text-semibold font-semibold  ">

                        <span className="absolute text-gray-400 text-lg cursor-pointer">
                          {/* 3000€ */}
                          <RiDeleteBin5Line  />
                        </span>
                      
                      
                      </div>
                      </div>
                      <div className=" relative w-full text-end   ">
                      <div className=" w-full flex  justify-center items-center absolute text-semibold font-semibold  ">

                        <span className="absolute text-gray-400 text-lg cursor-pointer">
                        <SlBag  />
                        </span>
                      
                      
                      </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className=" w-full border-b border-indigo-100"></div>
                  {/* **** */}
                  {/* end cart items */}

                  {/* clear cart */}
                  <div className="w-full ">
                    <div className="flex flex-row justify-between p-2">
                      <div className=" flex justify-center items-center w-60 h-10 rounded-lg bg-purple-600 text-white text-center font-semibold cursor-pointer">
                        <span>Clear wishlist</span>
                      </div>
                      <div className=" flex justify-center items-center ml-2 w-60 h-10 rounded-lg border border-purple-600 text-purple-600 text-center font-semibold cursor-pointer">
                        <span>Continue shopping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/6 xxs:w-full  xs:w-full sm:w-full md:w-2/6 xxs:mt-2 xs:mt-2 sm:mt-2 md:mt-0">
            <div className="flex flex-col w-full rounded-lg bg-white">
            <div className="flex justify-center items-center"> 
            <h1>Sponsored: </h1>
            </div>
            </div>
           
          </div>
        </div>
        <div className="w-full h-40 bg-indigo-100 p-2">
         
        </div>
        <div className="w-full h-40 bg-indigo-100 p-2">
          <div className="bg-white  w-full rounded-lg p-2">
            <h1>Sponsored or Our best sellers</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
