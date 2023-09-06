import React from "react";
import product from "../../data/products";
import { Link } from "react-router-dom";

const ProductBanner = () => {
  return (
    <>
      <div className="flex flex-col w-full h-60  pr-2 mt-2">
        <div className="flex-1 w-full h-full  ">
          <img
            src={product[1].image}
            alt={product.name}
            // className="flex-1 max-w-full object-cover h-full"
            className="flex-1 w-full object-cover h-full"
          />
        </div>
        <div className="flex-1 mt-[-200px] w-full h-20   p-2">
          <div className="flex flex-col w-full">
            <span className="text-4xl font-bold xxs:text-xs xs:text-xs">
              Nice Shoes for sport
            </span>
            <span className="text-2xl  xxs:text-xs xs:text-xs">
              Nice Shoes for sport
            </span>
            <Link
              to="#"
              className=" w-1/6 rounded   h-10 bg-slate-500 xxs:w-2/6 xxs:h-6 xs:w-2/6  xs:h-6"
            >
              <p className="text-center mt-1 text-xl  xxs:text-xs  xs:text-xs  ">
                Go to shop
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
