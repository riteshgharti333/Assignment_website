import React, { useState, useEffect } from "react";
import "./HomePageBanner.scss";
import { slider } from "../../assets/data";
import Typewriter from "typewriter-effect";

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
      <div className="banner-images">
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(${slider[currentIndex].image})` }}
        ></div>
        <div className="banner-info">
          <h1 className="banner-title">
            <Typewriter
              options={{
                strings: [slider[currentIndex].title], // Dynamic title
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
