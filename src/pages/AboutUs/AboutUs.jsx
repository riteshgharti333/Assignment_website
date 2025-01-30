import "./AboutUs.scss";
import about_banner from "../../assets/images/banner-3-1.webp";
import about_point_img from "../../assets/images/elementor-2.webp";
import slider_img from "../../assets/images/slider-img.webp";
import { IoEarthOutline } from "react-icons/io5";
import { TiLeaf } from "react-icons/ti";
import { FaRegSmile } from "react-icons/fa";
import about_bottom_img from "../../assets/images/about-banner.webp";
import empowring from "../../assets/images/empowring.webp";
import first from "../../assets/images/first.webp";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="about-banner">
        <img src={about_banner} alt="" />
        <div className="about-banner-info">
          <h1>About Us</h1>
          <div className="about-sm-info">
            <span className="home-link">Home</span>
            <span className="line">|</span>{" "}
            <span className="about-link">About Us</span>
          </div>
        </div>
      </div>
      <div className="about-points">
        <div className="about-points-info">
          <h2 className="about-points-title">
            Introduction to BK Welfare Society
          </h2>
          <p>
            Established in 2012 by Abdul Rahim Khatari, BK Welfare Society is
            dedicated to social welfare, with a strong emphasis on education,
            women's empowerment, and emergency aid for hospitalized individuals.
          </p>
        </div>
        <img className="about-points-img" src={about_point_img} alt="" />
      </div>
      <div className="about-points">
        <img className="about-points-img" src={about_point_img} alt="" />
        <div className="about-points-info">
          <h2 className="about-points-title">Our Journey</h2>
          <h5>A Legacy of Growth & Impact</h5>
          <p>
            From humble beginnings, we have achieved significant milestones,
            positively impacting thousands of lives. Our initiatives have
            fostered a better quality of life for children, women, and
            vulnerable individuals.
          </p>
        </div>
      </div>

      <div className="about-bullets">
        <div className="about-container">
          <img className="bullets-img" src={empowring} alt="" />

          <div className="about-bullets-info">
            <h1 className="about-bullets-title">Our Mission</h1>

            <ul className="bullets-sm-desc">
              <li>Building a Better Tomorrow</li>
              <li>Providing education to underprivileged children</li>
              <li>Empowering women to lead independent lives</li>
              <li>Assisting hospitalized individuals during emergencies</li>
              <li>
                Creating a society where everyone has the opportunity to thrive
              </li>
            </ul>
          </div>
        </div>

        <div className="about-container">
          <img className="bullets-img" src={empowring} alt="" />

          <div className="about-bullets-info">
            <h1 className="about-bullets-title">Our Vision</h1>

            <ul className="bullets-sm-desc">
              <li>A Future of Hope & Empowerment</li>
              <li>Every child has access to quality education</li>
              <li>Women play a vital role in shaping society</li>
              <li>
                A compassionate community that supports its vulnerable members
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="values">
        <img src={first} alt="" className="values-img" />

        <div className="value-info">
          <h2 className="vlues-title">Core Values</h2>
          <h5 className="values-desc">Guiding Principles that Define Us</h5>
          <ul className="values-points">
            <li>
              <span>Compassion – </span>Helping those in need
            </li>

            <li>
              <span>Integrity – </span>Ensuring transparency in all actions
            </li>

            <li>
              <span>Community Focus – </span>Prioritizing the needs of society
            </li>

            <li>
              <span>Empowerment – </span>Enabling individuals to reach their full
              potential
            </li>
          </ul>
        </div>
      </div>

      <div className="team">
        <h2 className="team-title">Our Team</h2>

        <div className="team-info">
          <div className="team-container">
          <h4 className="team-desc">Meet the Passionate Changemakers</h4>
          <p className="team-sm-desc">Our team is driven by dedication and commitment to making a difference. Each member plays a crucial role in carrying out our mission and vision.</p>
          </div>
         
          <div className="team-container">
          <h4 className="team-desc">What Our Team Says</h4>
          <p className="team-sm-desc">Being a part of BK Welfare Society has been a life-changing experience. Seeing lives transform through our efforts is truly rewarding.– ABDUL RAHMAN KHATRI 
          </p>
          </div>

        </div>
      </div>

      <div className="about-slider">
        <div className="about-slider-info">
          <div className="slider-sm-info">
            <div className="img-bg-div"></div>

            <img className="slider-img" src={slider_img} alt="" />

            <div className="slider-details">
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
                molestiae. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit, fugiat.
              </h3>

              <p className="slider-name">John Doe</p>
              <p className="slider-add">SEO, DELHI</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-cause">
        <h1 className="aboout-cause-title">
          Causes and positive change all over the world.
        </h1>

        <div className="about-cause-info">
          <div className="about-cause-icons">
            <IoEarthOutline className="about-cause-img" />

            <h5 className="about-icons-title">Our Mission</h5>
            <p className="about-icons-desc">
              Learn how access to clean water can improve health, boost local
              economies.
            </p>
          </div>

          <div className="about-cause-icons">
            <TiLeaf className="about-cause-img" />

            <h5 className="about-icons-title">Our Vission</h5>
            <p className="about-icons-desc">
              Learn how access to clean water can improve health, boost local
              economies.
            </p>
          </div>

          <div className="about-cause-icons">
            <FaRegSmile className="about-cause-img" />

            <h5 className="about-icons-title">Our Values</h5>
            <p className="about-icons-desc">
              Learn how access to clean water can improve health, boost local
              economies.
            </p>
          </div>
        </div>
      </div>
      <div className="banner-bottom-img">
        <img src={about_bottom_img} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
