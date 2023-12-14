import React from "react";
import product from "../../data/product";
import { RiDeleteBin5Line } from "react-icons/ri";
import mastercard from "../../assets/coutries/mastercard.png";
import visacard from "../../assets/coutries/visa_icon.png";
import paypalcard from "../../assets/coutries/paypal_icon.png";

const Cart = () => {
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
                  <h1 className="w-1/6 text-[14px] font-semibold ">Quantity</h1>
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
                      <div className="w-3/6 flex flex-row">
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
                      </div>
                    </div>
                    <div className="w-1/6">
                      <div className="  flex flex-row">
                        <div className="  w-4 h-4 rounded-full  border-[1px] border-black   flex justify-center items-center">
                          <span className="text-slace-300 text-xl  text-center">
                            -
                          </span>
                        </div>
                        <div className="w-6 mb-1  flex justify-center items-center border-b border-black">
                          <span className="font-semibold text-xs w-full h-full  text-center ">
                            2
                          </span>
                        </div>
                        <div className="  w-4 h-4 rounded-full  border-[1px] border-black   flex justify-center items-center">
                          <span className="text-slace-300 text-xs text-center">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-2/6">
                      <div className="text-end ">
                        <small className=" ">300000000000000€</small>
                      </div>
                    </div>
                    <div className="w-2/6">
                      <div className=" relative w-full text-end flex justify-center items-center ">
                        <span className=" absolute text-semibold font-semibold ml-20 cursor-pointer">
                          {/* 3000€ */}
                          <RiDeleteBin5Line className="absolute text-gray-400 text-lg" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full border-b border-indigo-100"></div>
                  {/* **** */}
                  {/* ******* item 2 */}
                  
                  <div className=" w-full p-2 border-t border-indigo-100 flex flex-row justify-between">
                    <div className="">
                      <span className="text-sm font-bold">Subtotal: </span>
                    </div>
                    <div className="mr-[200px]">
                      <span className="text-sm font-bold"> 600000000000€</span>
                    </div>
                  </div>
                  <div className=" w-full border-b border-indigo-100"></div>
                  {/* **** */}
                  {/* end cart items */}

                  {/* clear cart */}
                  <div className="w-full ">
                    <div className="flex flex-row justify-between p-2">
                      <div className=" flex justify-center items-center w-60 h-10 rounded-lg bg-purple-600 text-white text-center font-semibold cursor-pointer">
                        <span>Clear cart</span>
                      </div>
                      <div className=" flex justify-center ml-2 items-center w-60 h-10 rounded-lg border border-purple-600 text-purple-600 text-center font-semibold cursor-pointer">
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
              <div className=" w-fullmb-2 border  p-2">
                <div className="w-full flex justify-center items-center">
                  <span className="text-lg text-center font-bold">
                    Total à payer
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex flex-row justify-between p-2">
                  <span className="text-sm font-semibold">Subtotal:</span>
                  <span className="text-sm font-semibold">3000000€</span>
                </div>
                <div className="flex flex-row justify-between p-2">
                  <span className="text-sm font-semibold">Shipping:</span>
                  <span className="text-sm font-semibold">3000000€</span>
                </div>

                {/* <div>
                  <span className="text-sm font-semibold">
                    Click-and-collect:
                  </span>
                </div> */}
                <div className="flex flex-row justify-between p-2 border-t border-indigo-100">
                  <span className="text font-semibold"> Total à payer:</span>
                  <span className="text font-semibold">3000000€</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full  border-t-4 border-indigo-100 rounded-lg bg-white">
              <div className="w-full flex justify-center items-center border-b border-indigo-100 ">
                <span className="font-semibold">Méthodes de paiement</span>
              </div>
              <div className="w-full flex flex-row p-2">
                <input type="checkbox" name="" value id="" className="mr-2" />
                <img
                  src={mastercard}
                  alt=""
                  className="w-7 h-5 rounded-sm object-cover"
                />
              </div>
              <div className="w-full flex flex-row p-2">
                <input type="checkbox" name="" value id="" className="mr-2" />
                <img
                  src={visacard}
                  alt=""
                  className="w-7 h-5 rounded-sm object-cover"
                />
              </div>
              <div className="w-full flex flex-row p-2">
                <input type="checkbox" name="" value id="" className="mr-2" />
                <img
                  src={paypalcard}
                  alt=""
                  className="w-7 h-5 rounded-sm object-cover"
                />
              </div>
              <div className="w-full p-2 flex justify-center items-center">
                {/* <button className="w-full h-[40px] bg-indigo-600 rounded-lg text-white text-center font-bold"> */}
                <button className="w-full h-[40px] bg-purple-600 rounded-lg text-white text-center font-bold">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-40 bg-indigo-100 p-2">
          <div className="bg-white  w-full rounded-lg p-2">
            <h1>Choose your shipping</h1>
            <div className="w-full">
              <div className="flex flex-row">
                {/* Shipping company choices  */}
                {/* choice 1 */}
                <div className="flex flex-row mt-5 mr-3">
                  <label for="group1" className="flex flex-row">
                    <input
                      type="radio" // single choise
                      //   type="checkbox" // one or multiple choices
                      name="1"
                      value=""
                      id="group1"
                      className="mr-2"
                    />{" "}
                    <img
                      src={mastercard}
                      alt=""
                      className="w-20 h-20 rounded-sm object-cover"
                    />
                    <div className="flex justify-center items-center ml-2">
                      <span className="font-semibold">Price: 4,99€</span>
                    </div>
                  </label>
                </div>
                {/* choice 2 */}
                <div className="flex flex-row mt-5 mr-3">
                  <label for="group2" className="flex flex-row">
                    <input
                      type="radio" // single choise
                      //   type="checkbox" // one or multiple choices
                      name="1"
                      value=""
                      id="group2"
                      className="mr-2"
                    />{" "}
                    <img
                      src={mastercard}
                      alt=""
                      className="w-20 h-20 rounded-sm object-cover"
                    />
                    <div className="flex justify-center items-center ml-2">
                      <span className="font-semibold">Price: 4,99€</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
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

export default Cart;
