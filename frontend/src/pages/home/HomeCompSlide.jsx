import React from "react";
import { useGetAllProductsQuery } from "../../app/features/product/productSlice";
import Burundi from "../../assets/coutries/burundi.png";

const HomeCompSlide = ({ item }) => {
  //   const { item, isLoading, isSuccess, isError, error } = useGetAllProductsQuery(
  //     "productList",
  //     {
  //       selectFromResult: ({ data }) => ({
  //         item: data?.entities[itemId],
  //       }),
  //     }
  //   );
  //   console.log("item:", item?.attributes[0]?.pictures[0]?.url);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className={` relative w-[600px] h-[600px]  flex flex-col justify-center items-center`}>
          <img src={item.img} alt={item?.name} className="w-[600px] h-[600px]" />

          <div
            className={`absolute  w-[600px] h-[600px] bg-black bg-opacity-50 flex flex-col justify-center items-start`}
          >
            <div className=" p-3  flex flex-col">
              <span className="text-white text-xl font-bold p-3 flex flex-col">
                {item.name}
              </span>
            </div>
            <div>
              <button className="w-70 h-10 ml-6 text-white  border border-white rounded-lg text-center p-2 cursor-pointer">
                See the shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCompSlide;
