import React, { useEffect } from "react";
import "./About.scss";
import about_img from "../../assets/images/about-banner.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of animation
      easing: "ease-in-out", // Animation style
      once: false, // Repeat animation on scroll
    });
  }, []);

  return (
    <div className="about">
      <div className="about-banner">
        <div className="about-banner-info">
          <div className="banner-img">
            <img src={about_img} alt="" />
          </div>
          <div className="img-info">
            <h1 className="about-us">About Us</h1>
            <h3 className="about-title">Introduction to BK Welfare Society</h3>
            <p className="about-desc">
              Established in 2012 by Abdul Rahim Khatari, BK Welfare Society is
              dedicated to social welfare, with a strong emphasis on education,
              women's empowerment, and emergency aid for hospitalized
              individuals.
            </p>
          </div>
        </div>

        <div className="journey about-card" data-aos="fade-up">
          <h1>Our Journey</h1>
          <h3>A Legacy of Growth & Impact</h3>
          <p>
            From humble beginnings, we have achieved significant milestones,
            positively impacting thousands of lives. Our initiatives have
            fostered a better quality of life for children, women, and
            vulnerable individuals.
          </p>
        </div>

        <div className="mission about-card" data-aos="fade-up">
          <h1>Our Mission</h1>
          <ul>
            <li>Building a Better Tomorrow</li>
            <li>Providing education to underprivileged children</li>
            <li>Empowering women to lead independent lives</li>
            <li>Assisting hospitalized individuals during emergencies</li>
            <li>Creating a society where everyone has the opportunity to thrive</li>
          </ul>
        </div>

        <div className="vision about-card" data-aos="fade-up">
          <h1>Our Vision</h1>
          <ul>
            <li>A Future of Hope & Empowerment</li>
            <li>Every child has access to quality education</li>
            <li>Women play a vital role in shaping society</li>
            <li>A compassionate community that supports its vulnerable members</li>
          </ul>
        </div>

        <div className="values about-card" data-aos="fade-up">
          <h1>Core Values</h1>
          <h3>Guiding Principles that Define Us</h3>
          <ul>
            <li>Compassion – Helping those in need</li>
            <li>Integrity – Ensuring transparency in all actions</li>
            <li>Community Focus – Prioritizing the needs of society</li>
            <li>Empowerment – Enabling individuals to reach their full potential</li>
          </ul>
        </div>

        <div className="our about-card" data-aos="fade-up">
          <h1>Our Team</h1>
          <h3>Meet the Passionate Changemakers</h3>
          <p>
            Our team is driven by dedication and commitment to making a
            difference. Each member plays a crucial role in carrying out our
            mission and vision.
          </p>
          <h3>What Our Team Says:</h3>
          <p>
            Being a part of BK Welfare Society has been a life-changing
            experience. Seeing lives transform through our efforts is truly
            rewarding.– ABDUL RAHMAN KHATRI
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
