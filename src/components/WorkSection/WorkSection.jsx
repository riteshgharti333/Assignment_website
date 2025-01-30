import React, { useEffect } from "react";
import WorkSectionCard from "../WorkSectionCard/WorkSectionCard";
import "./WorkSection.scss";
import { work } from "../../assets/data";
import AOS from "aos";
import "aos/dist/aos.css"; 

const WorkSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,  
      easing: "ease-in-out", 
      once: true, 
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
            data-aos="fade-up" 
            data-aos-delay={index * 100} 
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
