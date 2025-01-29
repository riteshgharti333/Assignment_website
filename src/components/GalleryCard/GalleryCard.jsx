import "./GalleryCard.scss";

const GalleryCard = ({ g , ...props  }) => {
  return (
    <div className="galleryCard" {...props}>
      <img src={g.image} alt="" />
    </div>
  );
};

export default GalleryCard;
