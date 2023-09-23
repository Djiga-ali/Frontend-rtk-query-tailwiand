import React, { useState } from "react";
import variantProduct from "../../data/productWithVariants";
import ProductSubDetail from "../productAttributes/productSubDetail";
import AttributeDetails from "../productAttributes/AttributeDetails";
import { useParams } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../../app/features/product/productSlice";
import { useEffect } from "react";

const ProductAttributeDetails = () => {
  //   const params = useParams();
  //   const { id } = params;
  //   console.log("productId:", id);
  //   const {
  //     currentData: product,
  //     isFetching,
  //     isError,
  //     isLoading,
  //     isSuccess,
  //     error,
  //   } = useGetProductQuery(id);
  //   //   console.log("product:", product);

  //   const [selectedImg, setSelectedimg] = useState(
  //     product?.attributes[0]?.pictures
  //   );
  //   console.log(
  //     "product?.attributes[0]?.pictures[0].url:",
  //     product?.attributes[0]?.pictures[0].url
  //   );

  //   const prodImg = product?.attributes[0]?.pictures;

  //   const [mainProdAttr, setMainProdAttr] = useState(
  //     selectedImg === undefined
  //       ? product?.attributes[0]?.pictures[0].url
  //       : selectedImg[0]?.url
  //   );

  //   console.log("selectedImg:", selectedImg);

  //   useEffect(() => {
  //     setSelectedimg(product?.attributes[0]?.pictures);
  //   }, [product]);
  //   //   const mainProdImg = selectedImg[0];

  //   return (
  //     <div>
  //       {product?.name} {isFetching ? "...refetching" : ""}
  //     </div>
  //   );
  //   ***************************
  const params = useParams();
  const { id } = params;
  console.log("productId:", id);
  const {
    data: product,
    isFetching,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetProductQuery(id);
  const [productAttr, setProductAttr] = useState(product);
  console.log("productAttr:", productAttr);

  const [selectedImg, setSelectedimg] = useState(
    product?.attributes[0]?.pictures
  );

  console.log("selectedImg:", selectedImg);

  const [mainProdAttr, setMainProdAttr] = useState(product?.attributes[0]);
  const [carousselImg, setCarousselImg] = useState(selectedImg);
  // console.log("carousselImg:", carousselImg);
  if (isLoading && isFetching) return <div>Loading...</div>;
  if (!product) return <div>No product found!</div>;
  if (isError) return <div>An error has occurred!</div>;
  //   if (isFetching && !currentData) return <Skeleton />

  //   useEffect(() => {
  //     setSelectedimg(product?.attributes[0]?.pictures);
  //   }, [product]);

  return (
    <div className="grid grid-cols-3">
      <div>
        <div>
          <div className="flex-1 w-full ">
            <img
              src={carousselImg}
              alt=""
              className="flex-1 w-full h-full  aspect-square object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row mt-3 mb-10">
          {selectedImg?.map((mainImg) => {
            return (
              <div className="flex-1 w-full " key={mainImg.public_id}>
                <img
                  src={mainImg.url}
                  alt=""
                  className="flex-1 w-full h-full  aspect-square object-cover"
                  onClick={() => setCarousselImg(mainImg.url)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex-1">
          <h6 className="font-bold mt-5">{mainProdAttr?.name}</h6>
          <span>Others colors:</span>
          <div className="flex flex-row w-full mt-3 mb-10">
            {product.attributes?.map((prod) => {
              return (
                <>
                  <div key={prod.id} className="flex-1">
                    <ProductSubDetail
                      prod={prod}
                      setSelectedImg={setSelectedimg}
                      setMainProdAttr={setMainProdAttr}
                      setCarousselImg={setCarousselImg}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <AttributeDetails mainProdAttr={mainProdAttr} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductAttributeDetails;
