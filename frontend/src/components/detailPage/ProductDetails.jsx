import React, { useState } from "react";
import ProductCard from "../cards/ProductCard";
import product from "../../data/product";
import variantProduct from "../../data/productWithVariants";

const ProductDetails = () => {
  const [openColor, setOpenColor] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [amount, setAmount] = useState(1);
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });
  const [activeImg, setActiveImage] = useState(product.pictures[0]?.image);

  console.log("product:", product);

  return (
    <>
      {/* <div className="flex flex-col w-full h-full justify-between lg:flex-row gap-16 lg:items-center"> */}
      <div className="flex-1 w-full h-full justify-between lg:flex-row gap-16 lg:items-center">
        <div className=" flex flex-row xxs:flex-col xs:flex-col ">
          <div className="flex flex-col w-3/6 xxs:w-full xs:w-full gap-0 p-2">
            <img
              src={activeImg}
              alt=""
              className="w-full  aspect-square object-cover border-b border-gray-400"
            />

            <div className="flex flex-row w-full  h-20 bg-gray-100 pr-2">
              {product.pictures?.map((img) => {
                console.log("img:", img);
                return (
                  <>
                    <div className="flex w-full ">
                      <>
                        <img
                          src={img?.image}
                          alt=""
                          className="flex w-full h-20 ml-2 cursor-pointer  object-contain"
                          onClick={() => setActiveImage(img?.image)}
                        />
                      </>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* ABOUT */}
          <div className="flex flex-col w-2/6 p-2 gap-0 xxs:flex-1 xxs:w-full xs:flex-1 xs:w-full">
            <div className="flex-1 w-full xxs:flex-1 xxs:w-full xs:flex-1 xs:w-full">
              <h1 className=" text-3xl font-bold">Nike Invincible 3</h1>
              <span>Product color: Black</span>

              <p className="  text-gray-700  text-justify xxs:flex-1 xxs:w-full xs:flex-1 xs:w-full">
                Con un'ammortizzazione incredibile per sostenerti in tutti i
                tuoi chilometri, Invincible 3 offre un livello di comfort
                elevatissimo sotto il piede per aiutarti a dare il massimo oggi,
                domani e oltre. Questo modello incredibilmente elastico e
                sostenitivo, è pensato per dare il massimo lungo il tuo percorso
                preferito e fare ritorno a casa carico di energia, in attesa
                della prossima corsa.
              </p>
            </div>
            <div className="flex-1 w-2/6  h-3/6 mt-1 ">
              <div className="flex-1 w-full h-full  ">
                <div className="grid grid-cols-7 gap-6 w-full h-full">
                  {product.colors?.map((color) => (
                    <span
                      key={color}
                      className={`w-5 h-5 rouded-full ${color} m-2 cursor-pointer  hover:border border-black`}
                    >
                      {/* {color.code} */}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 mt-1">
              <h6 className="flex-1 mt-4">Size for Women</h6>
              <select name="" id="" className="text-xs">
                <option value="" className="">
                  XS(34-36)
                </option>
                <option value="" className="">
                  S(38-40)
                </option>
                <option value="" className="">
                  M(42-44)
                </option>
                <option value="" className="">
                  L(46-48)
                </option>
                <option value="" className="">
                  XL(50-52)
                </option>
                <option value="" className="">
                  XXL(54-56)
                </option>
                <option value="" className="">
                  XXXL(58-60)
                </option>
              </select>
              {/* <span className="w-5 h-5  ml-2 cursor-pointer">XS(36-38)</span> */}
            </div>
            <div className="flex-1 mt-1">
              <h6 className="flex-1 mt-4">Size for Men</h6>
              <select name="" id="" className="text-xs">
                <option value="" className="">
                  XS(36-38)
                </option>
                <option value="" className="">
                  S(40-42)
                </option>
                <option value="" className="">
                  M(44-46)
                </option>
                <option value="" className="">
                  L(48-50)
                </option>
                <option value="" className="">
                  XL(52-54)
                </option>
                <option value="" className="">
                  XXL(56-58)
                </option>
                <option value="" className="">
                  XXXL(60)
                </option>
              </select>
              {/* <span className="w-5 h-5  ml-2 cursor-pointer">XS(36-38)</span> */}
            </div>
            <div className="flex-1 w-full mt-4"> Livraion:</div>
            <div className="flex-1 w-full mt-4"> plus d'infos:</div>
          </div>

          {/* Price and add to cart */}
          <div className="flex-1 w-full p-2 ">
            <div className="flex flex-col w-full items-center gap-12 ">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold xxs:text-center">
                  $ 199.00
                </span>
                <span className="text-2xl text-gray-300 font-semibold xxs:text-center line-through">
                  $ 199.00
                </span>
              </div>

              <div className="flex flex-col w-full items-center xxs:flex-col xxs:gap-3">
                <div className="flex flex-row items-center ">
                  <button
                    className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                    onClick={() => setAmount((prev) => prev - 1)}
                  >
                    -
                  </button>
                  <span className="py-4 px-6 rounded-lg">{amount}</span>
                  <button
                    className=" bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                    onClick={() => setAmount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <button className=" mt-2 bg-violet-800 text-white font-semibold py-1 w-full rounded-xl h-full">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="flex  flex-col w-full items-center mt-2 gap-2 xxs:flex-col xxs:gap-3">
              <button className=" bg-violet-800 text-white font-semibold py-1 w-full rounded-xl h-full xs:mb-3 xxs:mb-3">
                contact seller
              </button>
              <button className=" bg-violet-800 text-white font-semibold py-1 w-full rounded-xl h-full xs:mb-3 xxs:mb-3">
                Buy now
              </button>
              {/* <button className=" bg-violet-800 text-white font-semibold py-1 w-full rounded-xl h-full">
                Whtats'up
              </button>
              <button className=" bg-violet-800 text-white font-semibold py-1 w-full rounded-xl h-full">
                Email
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="flex-1 w-full">
          <span className="flex-1 w-full tex-4xl text-center font-bold">
            Related Products
          </span>
        </div>
        <div className="flex-1 w-full">
          <div className="flex flex-row w-full overflow-auto gap-4 xxs:hidden xs:hidden">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
