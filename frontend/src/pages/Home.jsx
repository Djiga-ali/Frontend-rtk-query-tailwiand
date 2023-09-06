import React from "react";
import ProductCard from "../components/cards/ProductCard";
import ProductBanner from "../components/banners/ProductBanner";
import { useGetAllAttributesQuery } from "../app/features/attribute/attributeSlice";

const Home = () => {
  const {
    data: ProductAttributes,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetAllAttributesQuery();

  // console.log("ProductAttributes:", ProductAttributes);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 h-40 ">
          <ProductBanner />
        </div>
        <div className="pl-2 pr-2 grid grid-cols-5 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {ProductAttributes?.map((product) => (
            <ProductCard product={product} />
          ))}
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Home;
