import React from "react";
import "./HomePageBanner.scss";
import { slider } from "../../assets/data";
import Slide from "../Slide/Slide";
import first from "../../assets/images/first.jpg";
import Typewriter from "typewriter-effect";

const HomePageBanner = () => {
  return (
    <div className="banner">
      <div className="banner-images">
        <img src={first} alt="Banner" />
        <div className="banner-info">
          <h1 className="banner-title">
            <Typewriter
              options={{
                strings: [
                  "Empower Change Through Giving",
                  "Make Every Donation Count",
                  "Your Impact Starts Here",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h1>
          <p className="banner-desc">
            <Typewriter
              options={{
                strings: [
                  "Your small contributions can spark big changes in the lives of many.",
                  "Join us in making a lasting impact.",
                  "Together, we can change lives for the better.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
