import "./Slide.scss";
import { Slider } from "infinite-react-carousel";

const settings = {
  autoplay: false,
  autoplaySpeed: 5000, 
  duration: 800, 
  easing: "ease-in-out", 
  arrows: false,
  pauseOnHover: true,
};

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
