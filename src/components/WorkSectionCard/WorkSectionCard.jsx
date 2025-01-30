import React from "react";
import "./WorkSectionCard.scss";

// Wrap WorkSectionCard with React.memo to avoid re-renders when props do not change
const WorkSectionCard = React.memo(({ workCard }) => {
  const { title, objective, achievements, impact, image } = workCard;
  return (
    <div className="WorkSection-Card">
      <div className="WorkSection-Card-img">
        <img src={image} alt={title} loading="lazy" />
        <h3 className="image-title">{title}</h3>
      </div>

      <div className="WorkSection-Card-info">
        <h3 className="WorkSection-title">{title}</h3>
        <p className="objective">{objective}</p>

        <div className="achievements">
          <p>Achievements: </p>
          <ul>
            {achievements.map((a, index) => (
              <li key={index}>{a}</li>
            ))}
          </ul>
        </div>

        <p className="impact">{impact}</p>
      </div>
    </div>
  );
});

export default WorkSectionCard;
