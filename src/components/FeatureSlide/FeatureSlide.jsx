import "./FeatureSlide.scss";
import Slider from "infinite-react-carousel";

const settings = {
  dots: true,
  arrows: true,
};

const FeatureSlide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider
          slidesToShow={slidesToShow}
          arrowsScroll={arrowsScroll}
          {...settings}
        >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureSlide;
