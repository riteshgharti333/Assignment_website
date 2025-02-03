import "./Gallery.scss";

import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { gallery } from "../../assets/data";
import FeatureSlide from "../FeatureSlide/FeatureSlide";
import GalleryCard from "../GalleryCard/GalleryCard";

const Gallery = () => {
  const isExtraSmall = useMediaQuery("(max-width:480px)");
  const isSmall = useMediaQuery("(max-width:768px)");
  const isMedium = useMediaQuery("(max-width:1024px)");

  const slidesToShow = useMemo(() => {
    if (isExtraSmall) return 1;
    if (isSmall) return 1;
    if (isMedium) return 3;
    return 3;
  }, [isExtraSmall, isSmall, isMedium]);

  return (
    <div className="gallery">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-info">
        <FeatureSlide slidesToShow={slidesToShow} arrowsScroll={1}>
          {gallery.map((g, index) => (
            <GalleryCard g={g} key={g.id} />
          ))}
        </FeatureSlide>
      </div>
    </div>
  );
};

export default Gallery;
