import "./ServiceOne.scss";
import Gallery from "../../../components/Gallery/Gallery";
import serviceOne_banner_img from "../../../assets/images/1.webp";

import { FaRegCircle } from "react-icons/fa";
import serviveOne_1 from "../../../assets/images/helmet.jpeg";
import serviveOne_2 from "../../../assets/images/service2.jpeg";
import aboutImg6 from "../../../assets/images/aboutImg/aboutImg9.jpeg"

const ServiceOne = () => {
  return (
    <div className="serviceOne">
      <div className="serviceOne-banner">
        <img src={aboutImg6} alt="" />

        <div className="serviceOne-info">
          <h2>EMPLOYMENT GENERATION/ GOVERNMENT SCHEME</h2>
          <p>Know Everything about Socio-economic Development</p>
        </div>
      </div>

      <div className="main-section">
        <div className="serviceOne-content content-card">
          <div className="serviceOne-content-info">
            <h1>Empowering Women in Sikar Through Sustainable Livelihoods</h1>

            <p>
              Founded in 2012 by Abdul Rahim Khatari, BK Welfare Society, Sikar,
              is dedicated to uplifting underprivileged women by providing
              skill-based training and employment opportunities.
            </p>

            <p>
              In October 2019, we conducted a survey in Sikar to assess the
              economic conditions of women and identify ways to support their
              financial independence.
            </p>
          </div>

          <img className="serviceOne-content-img" src={serviveOne_1}></img>
        </div>

        <div className="serviceOne-second-content content-card">
          <div className="second-content-img">
            <img src={serviveOne_2} alt="" />
          </div>

          <div className="second-content-info">
            <h1>Building Skills, Creating Opportunities</h1>

            <p className="second-content-desc">
              Following the survey, we selected a group of women from Sikar and
              provided them with training in essential work skills, including:
            </p>

            <ul>
              <li>Taping</li>
              <li>Stamping</li>
              <li> Stitching clothes & paper bags</li>
            </ul>

            <p>
              We then connected them with local startups and small businesses in
              Sikar, enabling them to secure stable income. While some women
              worked from home, others commuted to their workplaces using
              transportation arranged by us. Their economic stability and
              confidence improved, positively impacting their families.
            </p>
          </div>
        </div>

        <div className="serviceOne-third-content content-card">
          <div className="third-content-left">
            <h1>Overcoming Challenges During COVID-19</h1>
            <p>
              Like many initiatives, our project faced setbacks during the
              COVID-19 pandemic, including transportation issues and job losses.
            </p>

            <p>
              However, in September 2020, with the support of PEACE FIRST, we
              revived and expanded the program, selecting more women from Sikar
              and connecting them with local work opportunities.
            </p>

            <p>Sustaining Growth: Our Continued Impact in Sikar</p>
            <div className="third-content-left-info">
              <FaRegCircle className="third-content-icon" />
              <p className="third-content-icon-desc">
                We remain committed to helping women in Sikar achieve financial
                independence, stability, and a better future.
              </p>
            </div>

            <p className="third-content-right-desc">
              Today, our initiative continues to grow, ensuring that more women
              in Sikar have access to:
            </p>
            <ul>
              <li>Ongoing mentorship and training</li>
              <li>Employment assistance in local businesses</li>
              <li>Support for small-scale entrepreneurship</li>
            </ul>
          </div>
        </div>

        <div className="serviceOne-sm-desc">
          <h1>Join Us in Transforming Lives in Sikar</h1>

          <p>
            At BK Welfare Society, Sikar, we believe that women’s empowerment
            strengthens families and the entire community.
          </p>

          <div className="pin">
            <span>Get Involved</span>
            <span className="pin-line">|</span>
            <span>Support Women’s Empowerment</span>
            <span className="pin-line">|</span>
            <span>Transform Sikar Together</span>
          </div>
        </div>
      </div>

      <div className="serviceOne-bottom-banner">
        <img
          src={serviceOne_banner_img}
          alt=""
          className="serviceOne-bottom-img"
        />

        <div className="serviceOne-bottom-info">
          <h2>Help others so other can adore your help</h2>
          <p>
            Here at All India Welfare Society, we see the value in everyone. We
            want to be a catalyst for positive change, and since our beginnings
            in 2008, we’ve been driven by the same ideas we initially founded
            our Non-Profit Organization upon support, empowerment, and progress.
          </p>
          <button>Donate Now</button>
        </div>
      </div>

      <div className="galleryCards">
        <Gallery />
      </div>
    </div>
  );
};

export default ServiceOne;
