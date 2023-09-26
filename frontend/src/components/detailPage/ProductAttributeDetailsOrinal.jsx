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

const ProductAttributeDetails = () => {
  const params = useParams();
  const { id } = params;
  console.log("productId:", id);
  let emptyArray = [];
  let product = [];

  const { productData, isLoading, isFetching, isSuccess, isError, error } =
    useGetAllProductsQuery("productList", {
      selectFromResult: ({ data }) => ({
        productData: data?.entities[id],
      }),
    });
  if (productData !== undefined) {
    product.push(productData);
  }

  // const productDetail = selector(selectProductById(id));
  // console.log("productDetail:", productDetail);

  console.log("product:", product);

  const [selectedImg, setSelectedimg] = useState();

  console.log("selectedImg:", selectedImg);

  const [mainProdAttr, setMainProdAttr] = useState([product?.attributes[0]]);
  console.log("mainProdAttr:", mainProdAttr);
  const [carousselImg, setCarousselImg] = useState([]);
  console.log("carousselImg:", carousselImg);
  const mainCarrousselImg = carousselImg[0]?.url;
  console.log("mainCarrousselImg:", mainCarrousselImg);

  // useEffect(() => {
  //   setSelectedimg(product?.attributes[0]?.pictures);
  //   if (selectedImg !== undefined) {
  //     setCarousselImg(selectedImg);
  //   }
  // }, [product, selectedImg]);

  if (isLoading && isFetching) return <div>Loading...</div>;
  if (!product) return <div>No product found!</div>;
  if (isError) return <div>An error has occurred!</div>;
  //   if (isFetching && !currentData) return <Skeleton />
  // NB: on ne peut pas utiliser useEffect(()=>[]) après la logic de if (isLoading ...)

  return (
    <div className="grid grid-cols-3">
      <div>
        <div>
          <div className="flex-1 w-full ">
            <img
              src={mainCarrousselImg}
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

const memoizedProductDetails = memo(ProductAttributeDetails);
export default memoizedProductDetails;
