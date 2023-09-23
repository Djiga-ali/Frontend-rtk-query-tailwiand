import React from "react";
import ProductCard from "../components/cards/ProductCard";
import ProductBanner from "../components/banners/ProductBanner";
import { useGetAllAttributesQuery } from "../app/features/attribute/attributeSlice";
import { useGetAllProductsQuery } from "../app/features/product/productSlice";
import AttributeProductCard from "../components/cards/AttributeProductCard";

const Home = () => {
  const {
    data: ProductAttributes,
    isError,
    isFetching,
    isLoading,
    isSuccess,
    error,
  } = useGetAllAttributesQuery("attributeList", {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const { data: products } = useGetAllProductsQuery("productList", {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  console.log("products:", products);
  if (isLoading) return <div>Loading...</div>;
  if (!products) return <div>No products found!</div>;
  if (isError) return <div>An error has occurred!</div>;
  //   if (isFetching && !currentData) return <Skeleton />

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 h-40 ">
          <ProductBanner />
        </div>
        <h3>Product attributes</h3>
        <div className="pl-2 pr-2 grid grid-cols-5 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {ProductAttributes
            ? ProductAttributes?.map((product) => (
                <AttributeProductCard
                  product={product}
                  id={product._id}
                  // name={post.name}
                  disabled={isFetching}
                />
              ))
            : "No Products found !!"}
        </div>
        <h3>Product with attributes</h3>
        <div className="pl-2 pr-2 grid grid-cols-5 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products?.map((product) => (
            <ProductCard
              product={product}
              id={product._id}
              // name={post.name}
              disabled={isFetching}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
