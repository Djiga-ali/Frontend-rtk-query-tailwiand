import React from "react";
import ProductCard from "../components/cards/ProductCard";
import ProductBanner from "../components/banners/ProductBanner";
import { useGetAllAttributesQuery } from "../app/features/attribute/attributeSlice";
import { useGetAllProductsQuery } from "../app/features/product/productSlice";
import AttributeProductCard from "../components/cards/AttributeProductCard";
import { data } from "../pages/carousselSlider/MultiSlide/mockData";
import SlickCard from "./carousselSlider/MultiSlide/SlickCard";

const Home = () => {
  const {
    data: productEntities = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery("productList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  const { ids } = productEntities;

  console.log("productEntities:", productEntities);

  let content;

  if (isLoading || isFetching) {
    return <>Loading...</>;
  }

  if (isError) {
    return <p className="text-red-400">{error?.data?.message}</p>;
  }

  // omit rendering logic
  return (
    <>
      <div className="grid grid-cols-6 gap-4 p-2 xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {ids?.length &&
          ids.map((productId) => (
            <div
              key={productId}
              className=" cursor-pointer hover:scale-105 ease-in-out duration-300"
            >
              <ProductCard productId={productId} />
            </div>
          ))}
      </div>
      <div className="grid grid-cols-6 gap-4 p-2 xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {/* <div className="inline-block p-2"> */}
        {data.map((item) => (
          <div className=" cursor-pointer hover:scale-105 ease-in-out duration-300">
            {/* <div className="w-[220px] xxs:w-full xs:w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"> */}
            <SlickCard product={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
