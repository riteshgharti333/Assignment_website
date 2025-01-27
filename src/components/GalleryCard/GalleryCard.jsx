import "./GalleryCard.scss";

const GalleryCard = ({ g }) => {
  return (
    <div className="galleryCard">
      <img src={g.image} alt="" />
    </div>
  );
};

export default GalleryCard;
