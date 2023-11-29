import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../pages/carousselSlider/MultiSlide/mockData";
import SlickCard from "../../pages/carousselSlider/MultiSlide/SlickCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

const SlickProduct = () => {
  let settings = {
    dots: true,
    infinite: false, // s'arrête à la dernière image
    // infinite: true, // le slick se repéte une fois arrivée à la dernière image
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[1209px] xxs:w-auto xs:w-auto xs:ml-10  sm:w-auto sm:ml-11 md:w-auto lg:w-auto ml-7">
      <h2> Responsive </h2>
      <Slider {...settings}>
        {/* <div
          id="slider"
          className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        > */}
        {data.map((item) => (
          <div className="w-full inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
            <SlickCard product={item} />
          </div>
        ))}
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default SlickProduct;
