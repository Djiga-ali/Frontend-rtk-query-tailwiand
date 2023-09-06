import React from "react";
import { FaStar } from "react-icons/fa";

const productData = [
  {
    name: "SleepHaven King",
    image: "https://source.unsplash.com/500x500?bed",
    label: "2 Colours, 1 Size",
    price: "$345.50",
    rating: 4,
  },
  {
    name: "White bed for kids",
    image: "https://source.unsplash.com/520x520?bed",
    label: "2 Colours, 1 Size",
    price: "$120.65",
    rating: 4,
  },
  {
    name: "BlueBed Comfy",
    image: "https://source.unsplash.com/510x510?bed",
    label: "2 Colours, 1 Size",
    price: "$120.65",
    rating: 4,
  },
  {
    name: "Cozzy Bed Queen",
    image: "https://source.unsplash.com/530x530?bed",
    label: "2 Colours, 1 Size",
    price: "$120.65",
    rating: 4,
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-5 pb-[6rem]">
      {productData.map((item, idx) => (
        <div
          // key={`product_${idx}`}
          // shadow-[0px_4px_14px_rgba(0,0,0,0.04)]: https://tailwindcss.com/docs/box-shadow
          className="cursor-pointer bg-[#FDFDFD] border border-[#EDEDED] p-2 rounded-3xl shadow-[0px_4px_14px_rgba(0,0,0,0.04)]"
        >
          {/* The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element's box. This means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio. */}
          <div className="aspect-[1.1515/1] rounded-2xl overflow-hidden mb-1">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <strong className="text-sm font-medium">{item.name}</strong>
          <span className="block text-[#646464] text-xs">{item.label}</span>
          <div className="flex gap-0.5 py-1">
            {[0, 1, 2, 3, 4].map((star) => (
              <FaStar
                key={star}
                fontSize={12}
                className={
                  star >= item.rating ? "text-[#DEDEDE]" : "text-[#FFC736]"
                }
              />
            ))}
          </div>
          <strong className="text font-semibold">{item.price}</strong>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
