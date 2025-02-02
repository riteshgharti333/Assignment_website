import React, { useState, useEffect, useMemo } from "react";
import "./HomePageBanner.scss";
import { slider } from "../../assets/data";
import Typewriter from "typewriter-effect";

const HomePageBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentTitle = useMemo(() => slider[currentIndex].title, [currentIndex]);

  return (
    <div className="banner">
      <div className="banner-images">
        {slider.map((slide, index) => (
          <div
            key={index}
            className={`banner-bg ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
        <div className="banner-info">
          <h1 className="banner-title">
            <Typewriter
              options={{
                strings: [currentTitle],
                autoStart: true,
                loop: false,
                delay: 40,
                deleteSpeed: Infinity,
                cursor: "",
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;