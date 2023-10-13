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
    <div className="flex-1  xs:grid-cols-1 xxs:grid-cols-1 p-3">
      <div className="flex flex-col w-full h-full">
        <div className="flex-1">
          <div className=" flex flex-row  w-full h-full">
            <div className=" flex flex-col  w-2/6 h-80 ">
              <div className=" flex flex-row w-full h-full  ">
                <div className="flex flex-col w-2/6 h-full border-r-4 border-white">
                  {imgSelect?.map((mainImg) => {
                    return (
                      <div className=" w-full  h-20 " key={mainImg.public_id}>
                        <img
                          // key={mainImg.public_id}
                          src={mainImg.url}
                          alt=""
                          // className="flex-1 w-full h-full  aspect-square  object-cover"
                          className=" w-full h-full  aspect-square object-cover"
                          onClick={() => setCarousselImg(mainImg.url)}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className=" w-full h-full ">
                  <img
                    src={carrousselMainImg}
                    alt=""
                    className=" w-full h-full aspect-square object-cover"
                  />
                </div>
              </div>
              <div className="  w-full h-30 ">
                <h6 className="font-bold mt-5">Choose your color:</h6>
                <div className="flex flex-row w-full mt-0 mb-10  ">
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
              </div>
            </div>

            <div className="w-2/6  h-full pl-2 text-justify overflow-scroll ">
              <AttributeDetails mainProdAttr={mainProd} />
              {/* <div className="w-full h-full "> */}
              {/* <div className="w-full h-full text-ellipsis overflow-hidden"> */}
              {/* <div className="w-full h-full text-clip overflow-hidden"> */}
              <div className="w-full h-full  pr-2 ">
                <h3 className="font-bold">Description:</h3>
                <p className=" overflow-hidden line-clamp-1 hover:line-clamp-none hover:overflow-hidden">
                  Leves veteris iuxta deformes velut densas castrensi cum
                  atratum plebeiis ita virgae iaculatores coquinae quisquam huic
                  mutilorum opponunt familiae digerentibus vicinitate quae
                  naturae reginae seminis textrinum lineamentorum cursu
                  praepositis vicinitate propagandae si ut desinens vicinitate
                  velut lineamentorum aptatae primigenios vehiculi reginae
                  fortes otiosis inter coquinae et oriundi iniectans pueros
                  proeliorum atratum subsidiales digerentibus conpage servitium
                  deinde atratum coquinae retorquens quisquam eandemque rectores
                  dein tessera familiae eandemque frontem velut illius vehiculi
                  inter modo tessera familiae tessera illius hominum armaturas
                  prima totum quae castravit fontes vias quaqua distortaque
                  velut data inter vicinitate quae vicinitate velut quae
                  castravit ipsa quae retorquens fortes ipsa.
                </p>
              </div>
            </div>
            <div className="w-2/6   ">
              <AttributeDetails mainProdAttr={mainProd} />
            </div>
            {/* <div className="  ">Prix et Moyen de livraison:</div> */}
          </div>
        </div>
      </div>

      {/* pratique */}
      {/*  */}
      <div></div>
    </div>
  );
};

const memoizedProductDetailVertical = memo(ProductDetailpageVertical);
export default memoizedProductDetailVertical;
