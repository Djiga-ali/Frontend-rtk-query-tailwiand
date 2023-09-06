import React from "react";

const AttributeDetails = ({ mainProdAttr }) => {
  return (
    <div className="mt-3 mb-10 flex flex-col">
      {mainProdAttr.name}
      {/* <span
        className={`w-5 h-5 rouded-full ${mainProdAttr.bgcolor} m-2 cursor-pointer  border border-black`}
      >
     
      </span> */}
      <span>Color: {mainProdAttr.productColorName}</span>
      <span>
        Size:
        <select>
          <option value="">select size</option>
          {mainProdAttr.size?.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </span>
      <span>Price: {mainProdAttr.price}</span>
    </div>
  );
};

export default AttributeDetails;
