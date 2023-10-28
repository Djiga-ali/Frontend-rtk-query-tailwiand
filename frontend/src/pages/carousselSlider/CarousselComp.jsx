import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const CarousselComp = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    // si "current === 0" on lui passe la dernière image du slides d'où "slides.length - 1"
    if (current === 0) setCurrent(slides.length - 1);
    // si non lui passe l'image qui a précédé l'image courante ou l'image affichée
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    // si "current === slides.length - 1" on lui passe la valeur "0".
    if (current === slides.length - 1) setCurrent(0);
    // si non on ajoute "1" à sa valeur courrente pour dire on passe l'image suivante
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        // NB: translateX(-${current * 100}%)
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      {/* Pour les points en bas de l'image qui permettent de slider  */}
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default CarousselComp;
