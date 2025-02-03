import "./AboutHome.scss";
import about_1 from "../../assets/images/h/about1.jpeg";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const AboutHome = () => {
  return (
    <div className="aboutHome">
      <div className="aboutHome-left">
        <h1>About</h1>
        <h3>Introduction to BK Welfare Society</h3>
        <p>
          Established in 2012 by Abdul Rahim Khatari, BK Welfare Society is
          dedicated to social welfare, with a strong emphasis on education,
          women’s empowerment, and emergency aid for hospitalized individuals.
        </p>

        <Link to={"/about-us"} className="read-more">
          <button>READ MORE </button>
          <RiArrowRightSLine className="button-icon" />{" "}
        </Link>
      </div>

      <div className="aboutHome-right">
        <img src={about_1} alt="" />
      </div>
    </div>
  );
};

export default AboutHome;
