import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useGetAllProductsQuery } from "../../app/features/product/productSlice";
import ProductCard from "../cards/ProductCard";
// static data
import { data } from "../../pages/carousselSlider/MultiSlide/mockData";
import SlickCard from "../../pages/carousselSlider/MultiSlide/SlickCard";

const SponsoredProducts = () => {
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
    <div className="relative flex items-center">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideLeft}
        size={40}
      />
      {/* <div
        id="slider"
        className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {ids?.length &&
          ids?.map((productId) => (
            <div
              key={productId}
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            >
              <ProductCard key={productId} productId={productId} />
            </div>
          ))}
      </div> */}

      <div
        id="slider"
        className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
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
  );
};

export default SponsoredProducts;
