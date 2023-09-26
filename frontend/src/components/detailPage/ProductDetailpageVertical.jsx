import React, { useState, memo } from "react";
import variantProduct from "../../data/productWithVariants";
import ProductSubDetail from "../productAttributes/productSubDetail";
import AttributeDetails from "../productAttributes/AttributeDetails";
import { useParams } from "react-router-dom";
import {
  selectProductById,
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../../app/features/product/productSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProductDetailpageVertical = () => {
  const params = useParams();
  const { id } = params;

  const { product, isLoading, isFetching, isSuccess, isError, error } =
    useGetAllProductsQuery("productList", {
      selectFromResult: ({ data }) => ({
        product: data?.entities[id],
      }),
    });

  const [selectedImg, setSelectedimg] = useState();

  const imgSelect = !selectedImg
    ? product && product?.attributes[0]?.pictures
    : selectedImg;
  console.log("imgSelect:", imgSelect);
  console.log("selectedImg:", selectedImg);

  // main selected product attributes

  const [mainProdAttr, setMainProdAttr] = useState();
  const mainProd = !mainProdAttr
    ? product && product?.attributes[0]
    : mainProdAttr;
  console.log("mainProd:", mainProd);
  console.log("mainProdAttr:", mainProdAttr);

  // Carroussel images
  const [carousselImg, setCarousselImg] = useState();
  const carrousselMainImg = !carousselImg
    ? product && product?.attributes[0]?.pictures[0].url
    : carousselImg;
  console.log("carrousselMainImg:", carrousselMainImg);
  console.log("carousselImg:", carousselImg);

  if (isLoading && isFetching) return <div>Loading...</div>;
  if (!product) return <div>No product found!</div>;
  if (isError) return <div>An error has occurred!</div>;
  // NB: on ne peut pas utiliser useEffect(()=>[]) après la logic de if (isLoading ...)

  return (
    <div className="flex flex-row xs:grid-cols-1 xxs:grid-cols-1 p-3">
      <div className="flex flex-col">
        <div className=" flex flex-row w-3/6 h-3/6 mt-3 ">
          <div className="flex flex-col   h-full bg-slate-200">
            {imgSelect?.map((mainImg) => {
              return (
                <div className="flex-1 w-20 h-20 " key={mainImg.public_id}>
                  <img
                    src={mainImg.url}
                    alt=""
                    // className="flex-1 w-full h-full  aspect-square  object-cover"
                    className="flex-1 w-full h-full  aspect-square object-contain"
                    onClick={() => setCarousselImg(mainImg.url)}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex-1 w-full ">
              <img
                src={carrousselMainImg}
                alt=""
                className="flex-1 w-full h-full  aspect-square object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h6 className="font-bold mt-5">{mainProd?.name}</h6>
          <span>Others colors:</span>
          <div className="flex flex-row  mt-3 mb-10 w-3/6 ">
            {product &&
              product?.attributes?.map((prod) => {
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
          <AttributeDetails mainProdAttr={mainProd} />
        </div>
      </div>
      <div>
        {/* <div className="flex-1">
          <h6 className="font-bold mt-5">{mainProd?.name}</h6>
          <span>Others colors:</span>
          <div className="flex flex-row w-full mt-3 mb-10">
            {product &&
              product?.attributes?.map((prod) => {
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
          <AttributeDetails mainProdAttr={mainProd} />
        </div> */}
      </div>
      <div></div>
    </div>
  );
};

const memoizedProductDetailVertical = memo(ProductDetailpageVertical);
export default memoizedProductDetailVertical;
