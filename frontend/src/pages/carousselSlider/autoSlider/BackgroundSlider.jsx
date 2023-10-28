import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const featuredProducts = [
  "/images/hero_1.png",
  "/images/hero_2.png",
  "/images/hero_3.png",
];

const BackgroundSlider = () => {
  let count = 0;
  let slideInterval;

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  //   we use "useEffect" to keep autoplay slide
  //   NB: il faut ajouter le code d'animation dans le "index.css" : https://tailwindcss.com/docs/animation
  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();

    // NB: ici on veut que quand on n'est pas sur la page, "slideRef.current" ne souvele pas une erreur car ce slide fonction seulement qu'on est sur cette page si on n'est pas sur la page "slideRef.current" va chercher la page et va afficher une erreur
    // ... on veut que quand on 'est pas sur la page le slide soit mise en pase.
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  // On crée une fonction pour permettre la transisition de slides selon temps donnée
  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    // The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval() .
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    // L'opérateur du "reste" (%) renvoie le "reste" de la division de l'opérande gauche par l'opérande droit. Le résultat a toujours le signe du numérateur.
    // ex: console.log(13 % 5); output: 3
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    // The "classList" property de "DOM" returns a DOMTokenList. The classList property returns the CSS classnames of an element.
    // NB: "fade-anim"  d'animation tailwind que nous avons ajouté dans le "index.css"
    // https://tailwindcss.com/docs/animation
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
};

export default BackgroundSlider;
