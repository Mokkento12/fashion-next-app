import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./InstagramSlider.module.sass";

interface InstagramSliderProps {
  images: string[];
}

export default function InstagramSlider({ images }: InstagramSliderProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.title}>Follow our @instagram_name</h2>
      <Carousel {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Instagram Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
