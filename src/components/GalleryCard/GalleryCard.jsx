import "./GalleryCard.scss";

const GalleryCard = ({ g , ...props  }) => {
  return (
    <div className="galleryCard" {...props}>
      <img src={g.image} alt="" loading="lazy" />
    </div>
  );
};

export default GalleryCard;
