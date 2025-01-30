import React, { useEffect, useMemo } from "react";
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

    return () => {
      // Cleanup AOS when component is unmounted
      AOS.refresh();
    };
  }, []);

  // Use useMemo to optimize the map function for work items
  const workCards = useMemo(() => {
    return work.map((workCard, index) => (
      <WorkSectionCard
        key={workCard.title}
        workCard={workCard}
        data-aos="fade-up"
        data-aos-delay={index * 100}
      />
    ));
  }, [work]);

  return (
    <div className="Work-section">
      <h1>Work</h1>
      <div className="Work-section-cards">{workCards}</div>
    </div>
  );
};

export default WorkSection;
