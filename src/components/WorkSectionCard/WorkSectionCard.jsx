import "./WorkSectionCard.scss";

const WorkSectionCard = ({ workCard, ...props }) => {
  const { title, objective, achievements, impact, image } = workCard;
  return (
    <div className="WorkSection-Card" {...props}>
      <div className="WorkSection-Card-img">
        <img src={image} alt=""  loading="lazy"/>
        <h3 className="image-title">{title}</h3>
      </div>

      <div className="WorkSection-Card-info">
        <h3 className="WorkSection-title">{title}</h3>
        <p className="objective">{objective}</p>

        <div className="achievements">
          <p>Achievements : </p>
          <ul>
            {achievements.map((a) => (
              <li>{a}</li>
            ))}
          </ul>
        </div>

        <p className="impact">{impact}</p>
      </div>
    </div>
  );
};

export default WorkSectionCard;
