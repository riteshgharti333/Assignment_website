import "./ServiceOne.scss";
import serviceOne_banner_img from "../../../assets/images/1.webp";
import empowring from "../../../assets/images/empowring.webp";

import food from "../../../assets/images/food.webp";
import { FaRegCircle } from "react-icons/fa";

const ServiceOne = () => {
  return (
    <div className="serviceOne">
      <div className="serviceOne-banner">
        <img src={serviceOne_banner_img} alt="" />

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

            {/* <div className="serviceOne-content-list">
              <p>The goals are as follows: –</p>
              <ul>
                <li>Women’s Empowerment through employment</li>
                <li>Development of women in rural and slum areas</li>
                <li>Government Schemes</li>
              </ul>
            </div> */}
          </div>

          <img className="serviceOne-content-img" src={food}></img>
        </div>

        <div className="serviceOne-second-content content-card">
          <div className="second-content-img">
            <img src={empowring} alt="" />
            <img src={empowring} alt="" />
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

            {/* 
            <p className="second-content-sm-dsc">
              which work for the welfare of society. They act as a mediator
              between society and government. It plays a vital role to improve
              communities and promoting citizens’ participation while mentoring
              them socially and economically.
            </p> */}
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
          </div>

          <div className="third-content-right">
            <img src={food} alt="" className="third-content-right-img" />

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

        {/* <div className="serviveOne-big-dsc">
          <p>
            They are Rajawas, Udaipuriya , Deepura , RampuraDabri . We took a
            survey and tried to understand the economic status of the village
            women and this survey was conducted in October’2019. After the
            survey, we made a batch of 10-10 women from each village, giving us
            a total of fifty (50) women.
          </p>

          <p>
            Later we mentored them with less skilled work, such as taping,
            stamping, and stitching clothes and paper bags. We introduced them
            to small startups and small businesses nearby where working required
            less skill and connected them to work, which may help them in
            generating income and helped in building confidence. Few groups of
            women were working from home (village), and some used to go to their
            given offices through the provided transportation, due to which
            regular employment carried on. Their house conditions improved due
            to positive growth.
          </p>

          <p>
            But due to the pandemic, many problems arose, such as transportation
            problems and others, and the growth of development of women
            economically in the village slowly declined for some time.
          </p>

          <p>
            But gradually, things started coming back to their place in
            September ‘2020. We took help from PEACE FIRST, and they provided
            the N.G.O. with initial funding for the project’s development.
            Afterward, we selected 20 women from each village, mentored them,
            and connected them to small startups and businesses nearby
          </p>

          <p>
            This project is still growing and is sustainable. Currently, we are
            working with women in a slum area, i.e., Vidyut Nagar, Jaipur City,
            Rajasthan.
          </p>
        </div> */}

        {/* <div className="serviceOne-fourth-content content-card">
          <div className="fourth-content-left">
            <h1>GOVERNMENT SCHEMES</h1>
            <p>
              Well talking about the Government Schemes/ Yojna which has been
              launched for the social and economic welfare of the citizens
              especially for women. These policies or schemes gives many
              advantages to the people . We took advantage of the schemes /
              yojna which were and are specifically established for women and
              through this schemes we registered many women who are economically
              and socially deprived so that they are benefited by the yojana’s.
            </p>
          </div>

          <div className="fourth-content-right">
            <img src={food} alt="" />

            <p>
              Some of the major schemes which we used in our project for the
              registration of women are “Berojgari Bhatta”,” Kishori Yojna “, ”
              Palanhar Yojna” which provided them with enough income and
              benefits for their all round growth .
            </p>
          </div>
        </div> */}

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
            <span  className="pin-line">|</span>
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
    </div>
  );
};

export default ServiceOne;
