import React, { useState } from "react";

const ProductImages = ({ pic, prod }) => {
  const [prodId, setProdId] = useState();
  //   const [activeImg, setActiveImage] = useState(prod.pictures[0].image);
  //   console.log("activeImg:", activeImg);

  return (
    <>
      <div className=" ">
        <div className=" ">
          <img
            src={pic.image}
            alt=""
            className="flex  h-1/6  aspect-square object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ProductImages;
