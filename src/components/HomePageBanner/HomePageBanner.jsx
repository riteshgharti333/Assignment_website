import "./HomePageBanner.scss";
import { slider } from "../../assets/data";
import Slide from "../Slide/Slide";

const HomePageBanner = () => {
  return (
    <div className="banner">
      <div className="banner-images">
        <Slide slidesToShow={1} arrowsScroll={1}>
          {slider.map((slide) => (
            <div key={slide.image}>
              <img src={slide.image} alt="banner-img" />
              <div className="img-info">
                <h1 className="banner-title">{slide.title}</h1>
                <p className="banner-desc">{slide.desc}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default HomePageBanner;
