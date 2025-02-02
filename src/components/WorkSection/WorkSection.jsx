import React, { useEffect, useMemo, useRef } from "react";
import WorkSectionCard from "../WorkSectionCard/WorkSectionCard";
import "./WorkSection.scss";
import { work } from "../../assets/data";

const WorkSection = () => {
  const workCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    workCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      workCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const workCards = useMemo(() => {
    return work.map((workCard, index) => (
      <div
        key={workCard.title}
        ref={(el) => (workCardsRef.current[index] = el)}
        className="WorkSection-Card-Container"
      >
        <WorkSectionCard workCard={workCard} />
      </div>
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