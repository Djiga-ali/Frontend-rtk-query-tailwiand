import React from "react";
import ProductCard from "../components/cards/ProductCard";
import ProductBanner from "../components/banners/ProductBanner";
import { useGetAllAttributesQuery } from "../app/features/attribute/attributeSlice";
import { useGetAllProductsQuery } from "../app/features/product/productSlice";
import AttributeProductCard from "../components/cards/AttributeProductCard";

const Home = () => {
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

  console.log("productEntities:", productEntities);

  let content;

  if (isLoading) content = "Loading...";

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = productEntities;
    content =
      ids?.length &&
      ids.map((productId) => (
        <div key={productId} className="grid grid-cols-5 gap-4">
          <ProductCard key={productId} productId={productId} />
        </div>
      ));
  }

  // omit rendering logic
  return content;
};

export default Home;
