import React from "react";
import { data } from "./mockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useGetAllProductsQuery } from "../../../app/features/product/productSlice";
import ProductCard from "../../../components/cards/ProductCard";
import SlickCard from "./SlickCard";

const Slick = () => {
  // Custom
  const {
    data: productEntities = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery("productList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  const { ids } = productEntities;
  // end custom

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    // 500 :  pixels ??? scroll de -500 pixels
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    // 500 :  pixels ???scroll de +500 pixels
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <img
        className="w-full h-[440px] object-cover"
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80"
        alt=""
      />
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <div className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <SlickCard product={item} />
            </div>
          ))}
        </div>

        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
};

export default Slick;
