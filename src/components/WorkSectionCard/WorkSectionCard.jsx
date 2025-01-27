import "./WorkSectionCard.scss";

const WorkSectionCard = ({ workCard }) => {
  const { title, objective, achievements, impact, image } = workCard;
  return (
    <div className="WorkSection-Card">
      <div className="WorkSection-Card-img">
        <img src={image} alt="" />
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
