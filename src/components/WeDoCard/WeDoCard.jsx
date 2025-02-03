import "./WeDoCard.scss";

import React from "react";
import { Link } from "react-router-dom";

const WeDoCard = React.memo(({ wedoCard }) => {
  const { logo, image, title, desc, wedo_link } = wedoCard;

  return (
    <Link to={`/${wedo_link}`}>
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
    </Link>
  );
});

export default WeDoCard;
