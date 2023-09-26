import React, { useEffect, useState } from "react";
import ProductImages from "./ProductImages";

const ProductSubDetail = ({
  prod,
  setSelectedImg,
  setMainProdAttr,
  setCarousselImg,
}) => {
  const [activeImg, setActiveImage] = useState(prod.pictures[0]?.url);

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
              setCarousselImg(prod.pictures[0].url);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ProductSubDetail;
