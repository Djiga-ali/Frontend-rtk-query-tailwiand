import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../pages/carousselSlider/MultiSlide/mockData";
import { useGetAllProductsQuery } from "../../app/features/product/productSlice";
import HomeCompSlide from "./HomeCompSlide";

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

const HomewithSlide = () => {
  const {
    data: productEntities = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery("productList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  const { ids } = productEntities;

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <h2>Fade</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item}>
            <HomeCompSlide item={item} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HomewithSlide;
