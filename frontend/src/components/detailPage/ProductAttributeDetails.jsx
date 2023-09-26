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

  const { product, isLoading, isFetching, isSuccess, isError, error } =
    useGetAllProductsQuery("productList", {
      selectFromResult: ({ data }) => ({
        product: data?.entities[id],
      }),
    });

  // // ***************************************************************
  // const [mainProdAttr, setMainProdAttr] = useState();
  // const mainprod = !mainProdAttr
  //   ? product && product?.attributes[0]
  //   : mainProdAttr;
  // console.log("mainprod:", mainprod);
  // console.log("mainProdAttr:", mainProdAttr);

  // const [selectedImg, setSelectedimg] = useState();

  // console.log("selectedImg:", selectedImg);

  // const imgSelect = !selectedImg
  //   ? product && product?.attributes[0]
  //   : selectedImg;
  // console.log("imgSelect:", imgSelect);

  // const carrousselImg = !selectedImg
  //   ? product && product?.attributes[0]?.pictures[0].url
  //   : selectedImg[0].url;
  // console.log("carrousselImg:", carrousselImg);

  // const [carousselImg, setCarousselImg] = useState();

  // return (
  //   <>
  //     <button
  //       className="w-20 h-10 bg-blue-600 m-4"
  //       disabled={isFetching || isLoading}
  //       onClick={() => setSelectedimg(product?.attributes[0]?.pictures)}
  //       // onClick={() => setCarousselImg(product && product?.attributes[0]?.pictures[0].url)}
  //     >
  //       Selected
  //     </button>
  //     <button
  //       className="w-20 h-10 bg-blue-600 m-4"
  //       disabled={isFetching || isLoading}
  //       // onClick={() => setSelectedimg(product?.attributes[0]?.pictures)}
  //       onClick={() =>
  //         setCarousselImg(product && product?.attributes[0]?.pictures[0].url)
  //       }
  //     >
  //       Caroussel
  //     </button>
  //     <button
  //       className="w-20 h-10 bg-blue-600 m-4"
  //       disabled={isFetching || isLoading}
  //       // onClick={() => setSelectedimg(product?.attributes[0]?.pictures)}
  //       onClick={() => setMainProdAttr(product && product?.attributes[0])}
  //     >
  //       MainProdAttr
  //     </button>
  //   </>
  // );

  // // ********************************************************
  // selectected images
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
    <div className="grid grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1">
      <div>
        <div>
          <div className="flex-1 w-full ">
            <img
              src={carrousselMainImg}
              alt=""
              className="flex-1 w-full h-full  aspect-square object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row mt-3 mb-10">
          {imgSelect?.map((mainImg) => {
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
        </div>
      </div>
      <div></div>
    </div>
  );
};

const memoizedProductDetails = memo(ProductAttributeDetails);
export default memoizedProductDetails;
