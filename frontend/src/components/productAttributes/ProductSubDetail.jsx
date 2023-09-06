import React, { useState } from "react";
import ProductImages from "./ProductImages";

const ProductSubDetail = ({
  prod,
  mainProdAttr,
  setSelectedImg,
  setMainProdAttr,
  setCarousselImg,
}) => {
  const [activeImg, setActiveImage] = useState(prod.pictures[0]?.image);

  return (
    <>
      <div className="flex-1">
        <div className="flex flex-row w-full h-full">
          <img
            src={activeImg}
            alt=""
            className="flex w-full h-full aspect-square object-cover"
            onClick={() => {
              setSelectedImg(prod.pictures);
              setMainProdAttr(prod);
              setCarousselImg(prod.pictures[0].image);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ProductSubDetail;
