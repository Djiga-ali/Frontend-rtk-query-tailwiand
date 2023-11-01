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
import PriceDetails from "./PriceDetails";
import SponsoredProducts from "../slick/SponsoredProducts";
import RelatedProduct from "../slick/RelatedProduct";
import FromYourSeachs from "../slick/FromYourSeachs";

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
    <>
      <div className=" flex-1  p-3 sm:mb-20">
        <div className="flex flex-col w-full h-full pb-3 ">
          <div className="flex-1">
            <div className=" relative  flex flex-row  w-full h-screen xxs:flex-col xs:flex-col sm:flex-col md:flex-row">
              <div className="w-full flex flex-row xxs:flex-col xs:flex-col ">
                <div className=" flex flex-col  w-[53%] h-80  ">
                  <div className=" flex flex-row w-full h-full xxs:w-[150%] xs:w-[150%]  xs:ml-[0px] sm:w-full md:w-full">
                    {/* <div className=" flex flex-row w-full h-full xxs:w-[550px] xs:w-[550px]  xs:ml-[0px]"> */}
                    <div className="flex flex-col w-[15%] h-full border-r-4 xxs:border-r-1 xs:border-r-1  border-white">
                      {/* <div className="flex flex-col w-2/6 h-full border-r-4 xxs:border-r-1 xs:border-r-1  border-white"> */}
                      {imgSelect?.map((mainImg) => {
                        return (
                          <div
                            className=" w-full  h-20 xxs:w-full xxs:h-20  xs:w-full xs:h-20 "
                            key={mainImg.public_id}
                          >
                            <img
                              // key={mainImg.public_id}
                              src={mainImg.url}
                              alt=""
                              // className="flex-1 w-full h-full  aspect-square  object-cover"
                              className=" flex w-full h-full xxs:w-full xxs:h-full xs:w-20 xs:h-20  aspect-square object-cover xxs:object-contain  xxs:bg-slate-100 xs:object-contain sm:object-contain  xs:bg-slate-100  sm:bg-slate-100 md:object-cover"
                              onClick={() => setCarousselImg(mainImg.url)}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div className=" w-full h-full  xxs:w-full xxs:h-full xs:w-full  xs:h-full xxs:border-r-1 xs:border-r-1 xs:ml-[-10px] xxs:ml-[-10px]">
                      <img
                        src={carrousselMainImg}
                        alt=""
                        // className=" w-full h-full xxs:w-full xs:w-full xs:h-full aspect-square object-contain"
                        className=" w-full h-full xxs:w-full xs:w-full xs:h-full aspect-square object-cover"
                      />
                    </div>
                  </div>
                  <div className="  w-full xxs:w-[150%] xs:w-[150%] h-30 ">
                    <h6 className="font-bold mt-5">Choose your color:</h6>
                    <div className="flex flex-row w-full xxs:w-full xs:w-full mt-0 mb-10  ">
                      {product &&
                        product?.attributes?.map((prod) => {
                          return (
                            <>
                              <div
                                key={prod.id}
                                className="w-full xxs:w-full xs:w-full"
                              >
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

                <div className="w-[47%] xs:w-[100%] xxs:w-[100%] xxs:h-[300px] xxs:mt-[140px] xs:h-[300px] xs:mt-[140px]  h-[80%] sm:h-[450px] md:h-[80%]  pl-2 text-justify overflow-y-scroll no-scrollbar  ">
                  <hr />
                  <AttributeDetails mainProdAttr={mainProd} />
                  {/* <div className="w-full h-full "> */}
                  {/* <div className="w-full h-full text-ellipsis overflow-hidden"> */}
                  {/* <div className="w-full h-full text-clip overflow-hidden"> */}
                  <div className="w-full h-full xs:w-full xxs:w-full xs:h-full xxs:-full  sm:h-full pr-2 pb-2 ">
                    <h3 className="font-bold">Description:</h3>
                    <p className="  ">
                      {/* <p className=" overflow-hidden line-clamp-1 hover:line-clamp-none hover:overflow-hidden no-scrollbar "> */}
                      Leves veteris iuxta deformes velut densas castrensi cum
                      atratum plebeiis ita virgae iaculatores coquinae quisquam
                      huic mutilorum opponunt familiae digerentibus vicinitate
                      quae naturae reginae seminis textrinum lineamentorum cursu
                      praepositis vicinitate propagandae si ut desinens
                      vicinitate velut lineamentorum aptatae primigenios
                      vehiculi reginae fortes otiosis inter coquinae et oriundi
                      iniectans pueros proeliorum atratum subsidiales
                      digerentibus conpage servitium deinde atratum coquinae
                      retorquens quisquam eandemque rectores dein tessera
                      familiae eandemque frontem velut illius vehiculi inter
                      modo tessera familiae tessera illius hominum armaturas
                      prima totum quae castravit fontes vias quaqua distortaque
                      velut data inter vicinitate quae vicinitate velut quae
                      castravit ipsa quae retorquens fortes ipsa.
                    </p>
                    <p className="  ">
                      {/* <p className=" overflow-hidden line-clamp-1 hover:line-clamp-none hover:overflow-hidden no-scrollbar "> */}
                      Leves veteris iuxta deformes velut densas castrensi cum
                      atratum plebeiis ita virgae iaculatores coquinae quisquam
                      huic mutilorum opponunt familiae digerentibus vicinitate
                      quae naturae reginae seminis textrinum lineamentorum cursu
                      praepositis vicinitate propagandae si ut desinens
                      vicinitate velut lineamentorum aptatae primigenios
                      vehiculi reginae fortes otiosis inter coquinae et oriundi
                      iniectans pueros proeliorum atratum subsidiales
                      digerentibus conpage servitium deinde atratum coquinae
                      retorquens quisquam eandemque rectores dein tessera
                      familiae eandemque frontem velut illius vehiculi inter
                      modo tessera familiae tessera illius hominum armaturas
                      prima totum quae castravit fontes vias quaqua distortaque
                      velut data inter vicinitate quae vicinitate velut quae
                      castravit ipsa quae retorquens fortes ipsa.
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="w-[25%] xxs:w-[100%] xs:w-[100%]  sm:w-[100%] md:w-[25%] xxs:mt-4 xs:mt-4  ">
                <h1 className="font-bold sm:mt-4 md:mt-1">
                  Détails de livraison :
                </h1>
                <PriceDetails mainProdAttr={mainProd} />
                {/* <AttributeDetails mainProdAttr={mainProd} /> */}
              </div>
              {/* <div className="  ">Prix et Moyen de livraison:</div> */}
            </div>
          </div>
        </div>
        <hr className="sm:hidden xs:hidden xxs:hidden" />
        {/* pratique */}
        {/*  */}
      </div>
      {/* <div className="flex flex-col xxs:hidden xs:hidden sm:hidden md:flex sm:mb-10"> */}
      <div className="xxs:mt-[300px] xs:mt-[700px] sm:mt-[300px] md:mt-[-50px]">
        <h1>Sponsorisé:</h1>
        <SponsoredProducts />
      </div>
      {/* <div>
            <h1>Related Products:</h1>
            <RelatedProduct />
          </div>
          <div>
            <h1>Inspiré par vos recherches:</h1>
            <FromYourSeachs />
          </div>
          <div className="">
            {" "}
            <h1>Plus de details sur le produit</h1>
          </div> */}

      {/* SM
      <div className="xxs:hidden xs:hidden sm:flex md:hidden">
        <p className="text-3xl font-bold">SM</p>
      </div>*/}
      {/* XS */}
      {/* <div className="xxs:hidden xs:flex sm:hidden md:hidden">
        <p className="text-3xl font-bold">XS</p>
      </div> */}
      {/* XXS */}
      {/* <div className="xxs:flex xs:hidden sm:hidden md:hidden">
        <p className="text-3xl font-bold">XXS</p>
      </div> */}
    </>
  );
};

const memoizedProductDetailVertical = memo(ProductDetailpageVertical);
export default memoizedProductDetailVertical;
