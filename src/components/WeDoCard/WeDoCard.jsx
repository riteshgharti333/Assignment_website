import React from "react";
import "./WeDoCard.scss";

// Memoize WeDoCard to prevent unnecessary re-renders
const WeDoCard = React.memo(({ wedoCard }) => {
  const { logo, image, title, desc } = wedoCard;

  return (
    <div className="weDoCard">
      <div className="weDo-container">
        <img className="bg-img" src={image} alt={title} loading="lazy" />
        <div className="weDo-info">
          <img src={logo} alt={title} loading="lazy" />
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
});

export default WeDoCard;
