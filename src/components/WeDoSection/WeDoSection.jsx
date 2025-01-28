import WeDoCard from "../WeDoCard/WeDoCard";
import "./WeDoSection.scss";
import { weDo } from "../../assets/data";
const WeDoSection = () => {
  return (
    <div className="weDoSection">
        <h1 className="title">We Do</h1>
      <div className="weDo-Section-cards">
        {weDo.map((wedoCard) => (
          <WeDoCard wedoCard={wedoCard} key={wedoCard.title} />
        ))}
      </div>
    </div>
  );
};

export default WeDoSection;
