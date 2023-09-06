import React from "react";
import {
  AiOutlineStar,
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineEye,
} from "react-icons/ai";
import product from "../../data/products";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="h-80 mt-4  flex flex-col w-full drop-shadow-lg rounded-lg">
        <div className="flex-1 w-full h-4/6  bg-slate-100 ">
          <Link to={`/product/${product?._id}`}>
            <img
              src={product?.pictures[0]?.url}
              alt={product?.name}
              className="flex-1 w-full h-full object-cover xxs:object-fill"
            />
          </Link>
        </div>
        <div className="flex flex-row w-full h-7  mt-[-30px] bg-gradient-to-r from-slate-200 to-slate-100 justify-between pl-2 pr-2">
          <span className="cursor-pointer">
            <AiOutlineEye size={20} />
          </span>
          <span className="cursor-pointer">
            <AiOutlineHeart size={20} />
          </span>
          <span className="cursor-pointer">
            <AiOutlineShopping size={20} />
          </span>
        </div>
        <div className=" flex-1 w-full h-full flex flex-col bg-white  p-1">
          <span className="flex-1 text-sm font-bold">{product?.name}</span>
          <span className="flex-1 text-sm font-bold">{product?.price}</span>
          <Link to={`/product/${product?._id}`}>
            <span className="flex-1 text-sm">Shop</span>
          </Link>

          <span className="flex flex-row p-1">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </span>
          <span className="flex-1 text-xs text-gray-400">Language</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
