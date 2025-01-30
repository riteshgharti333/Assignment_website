import React, { useEffect, useMemo } from "react";
import "./Gallery.scss";
import { useMediaQuery } from "@mui/material";
import { gallery } from "../../assets/data";
import FeatureSlide from "../FeatureSlide/FeatureSlide";
import GalleryCard from "../GalleryCard/GalleryCard";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import the AOS CSS file

const Gallery = () => {
  const isExtraSmall = useMediaQuery("(max-width:480px)");
  const isSmall = useMediaQuery("(max-width:768px)");
  const isMedium = useMediaQuery("(max-width:1024px)");
  const isLarge = useMediaQuery("(max-width:1200px)");

  const slidesToShow = useMemo(() => {
    if (isExtraSmall) return 1;
    if (isSmall) return 2;
    if (isMedium) return 3;
    return 3;
  }, [isExtraSmall, isSmall, isMedium]);

  useEffect(() => {
    // Initialize AOS library with custom settings
    AOS.init({
      duration: 500,   // Duration of animation
      easing: "ease-in-out", // Easing function
      once: true, 
    });

    // Refresh AOS on scroll
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="gallery">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-info">
        <FeatureSlide slidesToShow={slidesToShow} arrowsScroll={1}>
          {gallery.map((g, index) => (
            <GalleryCard 
              g={g} 
              key={g.id} 
              data-aos="fade-up" // Apply AOS fade-up animation
              data-aos-delay={index * 100} // Add slight delay for staggered effect
            />
          ))}
        </FeatureSlide>
      </div>
    </div>
  );
};

export default Gallery;
