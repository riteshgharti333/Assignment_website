import React, { useState, useEffect } from "react";
import "./HomePageBanner.scss";
import { slider } from "../../assets/data";
import Typewriter from "typewriter-effect";

const HomePageBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 7000); // Sync with animation duration (7s)

    return () => clearInterval(interval);
  }, []);

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
                strings: [slider[currentIndex].title], // Dynamic title
                autoStart: true,
                loop: false, // Avoid repeating within 7s
                delay: 10,
                // deleteSpeed: 0,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
