import React, { useState, useEffect } from "react";
import "./HomePageBanner.scss";
import { slider } from "../../assets/data";
import Typewriter from "typewriter-effect";
import Slide from "../Slide/Slide";

const HomePageBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 7000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <Slide slidesToShow={1} arrowsScroll={1}>
        {slider.map((sliderImg) => (
          <div className="banner-images">
            <img src={sliderImg.image} alt="" />
            <div className="banner-info">
              <h1 className="banner-title">{sliderImg.title}</h1>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default HomePageBanner;
