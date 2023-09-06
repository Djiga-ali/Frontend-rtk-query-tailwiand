import React, { useState } from "react";
import variantProduct from "../data/productWithVariants";
import ProductSubDetail from "../components/productAttributes/productSubDetail";
import AttributeDetails from "../components/productAttributes/AttributeDetails";

const ProductAttributes = () => {
  const [selectedImg, setSelectedimg] = useState(
    variantProduct?.attributes[0].pictures
  );
  console.log("variantProduct:", variantProduct);
  const [mainProdAttr, setMainProdAttr] = useState(
    variantProduct?.attributes[0]
  );

  const [carousselImg, setCarousselImg] = useState(selectedImg[0].image);

  // console.log("carousselImg:", carousselImg);

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
              <div className="flex-1 w-full " key={mainImg.image}>
                <img
                  src={mainImg.image}
                  alt=""
                  className="flex-1 w-full h-full  aspect-square object-cover"
                  onClick={() => setCarousselImg(mainImg.image)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex-1">
          <h6 className="font-bold mt-5">{mainProdAttr.name}</h6>
          <span>Others colors:</span>
          <div className="flex flex-row w-full mt-3 mb-10">
            {variantProduct.attributes?.map((prod) => {
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

export default ProductAttributes;
