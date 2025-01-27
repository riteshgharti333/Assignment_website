import WorkSectionCard from "../WorkSectionCard/WorkSectionCard";
import "./WorkSection.scss";
import { work } from "../../assets/data";

const WorkSection = () => {
  return (
    <div className="Work-section">
      <h1>Work</h1>

      <div className="Work-section-cards">
        {work.map((workCard) => (
          <WorkSectionCard workCard={workCard} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
