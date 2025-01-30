import React, { useMemo } from "react";
import WeDoCard from "../WeDoCard/WeDoCard";
import "./WeDoSection.scss";
import { weDo } from "../../assets/data";

const WeDoSection = () => {
  // Memoize the mapping of WeDoCard components to avoid recalculating on each render
  const weDoCards = useMemo(() => {
    return weDo.map((wedoCard) => (
      <WeDoCard wedoCard={wedoCard} key={wedoCard.title} />
    ));
  }, [weDo]);

  return (
    <div className="weDoSection">
      <h1 className="title">We Do</h1>
      <div className="weDo-Section-cards">{weDoCards}</div>
    </div>
  );
};

export default WeDoSection;
