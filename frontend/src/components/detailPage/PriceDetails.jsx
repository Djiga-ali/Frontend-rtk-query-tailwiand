import React from "react";

const PriceDetails = ({ mainProdAttr }) => {
  return (
    <div className=" w-full   h-screen ">
      <div className="pr-3 mt-3 mb-10 h-full overflow-y-scroll no-scrollbar">
        <div className=" flex flex-col  border border-gray-200 rounded-md p-2">
          <div className="flex flex-col ">
            <span className="font-bold">{mainProdAttr?.name}</span>

            <span className="font-bold">Price: {mainProdAttr?.price}</span>
            <span>Retours GRATUITS </span>
            <span>En stock </span>
            <span>Coupon de reduction </span>
            <span>Reduction de 20% à partir de 3 articles </span>
            <span>Produit de la Boutique : Duka langu </span>
            <span>Possibilité de livraison </span>
          </div>
          <div className="flex flex-col xxs:flex-col xs:flex-col sm:flex-row md:flex-col">
            <button className="w-full sm:m-1 md:m-1 h-10 bg-blue-700 text-white text-[14px] font-bold  rounded-lg sm:my-3">
              Ajouter au Panier
            </button>
            <button className="w-full sm:m-1 md:m-1 h-10 bg-blue-400 text-white text-[14px] font-bold rounded-lg mt-3 sm:my-3">
              Acheter directement{" "}
            </button>

            <button className="w-full sm:m-1 md:m-1 h-10 bg-green-400 text-white text-[14px] font-bold rounded-lg my-3 sm:my-3">
              Contacter le vendeur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
