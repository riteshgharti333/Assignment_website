import "./WeDoSection.scss";

import { useMemo } from "react";
import WeDoCard from "../WeDoCard/WeDoCard";
import { weDo } from "../../assets/data";

const WeDoSection = () => {
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
