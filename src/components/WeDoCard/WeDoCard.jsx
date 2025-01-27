import "./WeDoCard.scss";

const WeDoCard = ({ wedoCard }) => {
  const { logo, image, title, desc } = wedoCard;

  return (
    <div className="weDoCard">
      <div className="weDo-container">
        <img className="bg-img" src={image} alt="" />
        <div className="weDo-info">
          <img src={logo} alt="" />
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WeDoCard;
