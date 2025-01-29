import React, { useEffect } from "react";
import WorkSectionCard from "../WorkSectionCard/WorkSectionCard";
import "./WorkSection.scss";
import { work } from "../../assets/data";
import AOS from "aos";  // Import AOS library
import "aos/dist/aos.css"; // Import the AOS CSS file for styles

const WorkSection = () => {
  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      duration: 500,  // Duration of animation in ms
      easing: "ease-in-out", // Animation easing (optional)
      once: false, // Whether animations should only trigger once or repeat (optional)
    });
  }, []);

  return (
    <div className="Work-section">
      <h1>Work</h1>

      <div className="Work-section-cards">
        {work.map((workCard, index) => (
          <WorkSectionCard
            workCard={workCard}
            key={workCard.title}
            data-aos="fade-up" // Apply AOS animation
            data-aos-delay={index * 100} // Stagger the animations for a smooth effect
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
