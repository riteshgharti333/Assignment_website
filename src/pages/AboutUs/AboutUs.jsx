import "./AboutUs.scss";

import { IoEarthOutline } from "react-icons/io5";
import { TiLeaf } from "react-icons/ti";
import { FaRegSmile } from "react-icons/fa";
import about_bottom_img from "../../assets/images/about-banner.webp";

import Gallery from "../../components/Gallery/Gallery";
import { Link } from "react-router-dom";

import AboutHome from "../../components/AboutHome/AboutHome";

import aboutImg6 from "../../assets/images/aboutImg/aboutimg8.jpeg";

import chairmanImg from "../../assets/images/chairman.webp"


const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="about-banner">
        <img src={aboutImg6} alt="" />
        <div className="about-banner-info">
          <h1>About Us</h1>
          <div className="about-sm-info">
            <span className="home-link">
              <Link to={"/"}>Home</Link>
            </span>
            <span className="line">|</span>{" "}
            <span className="about-link">About Us</span>
          </div>
        </div>
      </div>

      <div className="about-more-content">
        <AboutHome />
      </div>

      <div className="about-slider">
        <div className="about-slider-info">
          <div className="slider-sm-info">
            <div className="img-bg-div"></div>

            <img className="slider-img" src={chairmanImg} alt="" />

            <div className="slider-details">
              <h3>
                BK Welfare Society – People Helping People Around the World
              </h3>
              <h3>
                Under the leadership of Abdul Rahim Khatari, we are dedicated to
                helping those in need. Using personal resources, we strive to
                bring happiness and support to communities worldwide. Together,
                we create a positive impact, making the world a better place for
                everyone.
              </h3>

              <p className="slider-name"> Abdul Rahim khatari </p>
              <p className="slider-add"> Chairman</p>
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
            <ul className="about-icons-desc">
              <li>Building a Better Tomorrow</li>
              <li>Providing education to underprivileged children</li>
              <li>Empowering women to lead independent lives</li>
              <li>Assisting hospitalized individuals during emergencies</li>
              <li>
                Creating a society where everyone has the opportunity to thrive
              </li>
            </ul>
          </div>

          <div className="about-cause-icons">
            <TiLeaf className="about-cause-img" />

            <h5 className="about-icons-title">Our Vision</h5>
            <ul className="about-icons-desc">
              <li>A Future of Hope & Empowerment</li>
              <li>Every child has access to quality education</li>
              <li>Women play a vital role in shaping society</li>
              <li>
                A compassionate community that supports its vulnerable members
              </li>
            </ul>
          </div>

          <div className="about-cause-icons">
            <FaRegSmile className="about-cause-img" />

            <h5 className="about-icons-title">Our Values</h5>
            <ul className="about-icons-desc">
              <li>Compassion – Helping those in need</li>
              <li>Integrity – Ensuring transparency in all actions</li>
              <li>Community Focus – Prioritizing the needs of society</li>
              <li>
                Empowerment – Enabling individuals to reach their full potential
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="banner-bottom-img">
        <img src={about_bottom_img} alt="" />
      </div>

      <div className="galleryCards">
        <Gallery />
      </div>
    </div>
  );
};

export default AboutUs;
