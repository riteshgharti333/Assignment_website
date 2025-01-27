import "./Gallery.scss";
import { useMediaQuery } from "@mui/material";
import { gallery } from "../../assets/data";
import FeatureSlide from "../FeatureSlide/FeatureSlide";
import GalleryCard from "../GalleryCard/GalleryCard";

const Gallery = () => {
  const isExtraSmall = useMediaQuery("(max-width:480px)");
  const isSmall = useMediaQuery("(max-width:768px)");
  const isMedium = useMediaQuery("(max-width:1024px)");
  const isLarge = useMediaQuery("(max-width:1200px)");

  const slidesToShow = isExtraSmall
    ? 1
    : isSmall
    ? 2
    : isMedium
    ? 3
    : isLarge
    ? 3
    : 3;

  return (
    <div className="gallery">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-info">
        <FeatureSlide slidesToShow={slidesToShow} arrowsScroll={1}>
          {gallery.map((g) => (
            <GalleryCard g={g} key={g.id} />
          ))}
        </FeatureSlide>
      </div>
    </div>
  );
};

export default Gallery;
