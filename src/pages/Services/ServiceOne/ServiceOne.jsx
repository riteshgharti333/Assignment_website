import "./ServiceOne.scss";
import sirviceOne_banner_img from "../../../assets/images/1.webp";
import empowring from "../../../assets/images/empowring.webp";

import food from "../../../assets/images/food.webp";
import { FaRegCircle } from "react-icons/fa";

const ServiceOne = () => {
  return (
    <div className="serviceOne">
      <div className="serviceOne-banner">
        <img
          src={sirviceOne_banner_img}
          alt=""
          className="serviceOne-banner-img"
        />

        <div className="serviceOne-info">
          <h2 className="serviceOne-title">
            EMPLOYMENT GENERATION/ GOVERNMENT SCHEME
          </h2>
          <p className="serviceOne-desc">
            Know Everything about Socio-economic Development
          </p>
        </div>
      </div>

      <div className="main-section">
        <div className="serviceOne-content">
          <div className="serviceOne-content-info">
            <h1 className="serviceOne-content-title">EMPLOYMENT GENERATION</h1>

            <p className="serviceOne-content-desc">
              The Employment Generation Program begins with goals, that may and
              should help with the welfare of the women in rural and slum areas.
            </p>

            <div className="serviceOne-content-list">
              <p className="serviceOne-content-list-title">
                The goals are as follows: –
              </p>
              <ul>
                <li>Women’s Empowerment through employment</li>
                <li>Development of women in rural and slum areas</li>
                <li>Government Schemes</li>
              </ul>
            </div>
          </div>

          <img className="serviceOne-content-img" src={food}></img>
        </div>

        <div className="serviceOne-second-content">
          <div className="second-content-img">
            <img src={empowring} alt="" />
            <img src={empowring} alt="" />
          </div>

          <div className="second-content-info">
            <h1 className="second-content-title">THE ROLE OF NGO</h1>

            <p className="second-content-desc">
              NGO’s are considered to be Non – Profit Governmental bodies
            </p>

            <p className="second-content-sm-dsc">
              which work for the welfare of society. They act as a mediator
              between society and government. It plays a vital role to improve
              communities and promoting citizens’ participation while mentoring
              them socially and economically.
            </p>
          </div>
        </div>

        <div className="serviceOne-third-content">
          <div className="third-content-left">
            <h1 className="third-content-left-title">
              WOMEN EMPOWERMENT THROUGH EMPLOYMENT
            </h1>
            <p className="third-content-left-desc">
              Through this project, the women are empowered, and also they can
              amplify their voices.
            </p>

            <div className="third-content-left-info">
              <FaRegCircle className="third-content-icon" />
              <p className="third-content-icon-desc">
                Their ideas and ability to participate in the decision-making
                process in social and especially in economic life within and
                outside their home gives them more opportunities with less skill
                and, to some extent, removes gender bias in society, especially
                in rural and slum areas.
              </p>
            </div>
          </div>

          <div className="third-content-right">
            <img src={food} alt="" className="third-content-right-img" />

            <p className="third-content-right-desc">
              DEVELOPMENT OF WOMEN IN RURAL AND SLUM AREA :-
            </p>
            <p className="third-content-sm-desc">
              Our NGO – ‘A.I.W.S,’ formed this project with the view of helping
              and developing women economically – to make this project reality,
              we selected five villages from the State of Rajasthan.
            </p>
          </div>
        </div>

        <div className="serviveOne-big-dsc">
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
        </div>

        <div className="serviceOne-fourth-content">
          <div className="fourth-content-left">
            <h1 className="fourth-content-left-title">GOVERNMENT SCHEMES</h1>
            <p className="fourth-content-left-desc">
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
            <img src={food} alt="" className="fourth-content-right-img" />

            <p className="fourth-content-right-desc">
              Some of the major schemes which we used in our project for the
              registration of women are “Berojgari Bhatta”,” Kishori Yojna “, ”
              Palanhar Yojna” which provided them with enough income and
              benefits for their all round growth .
            </p>
          </div>
        </div>

        <div className="serviceOne-sm-desc">
          <h1>AIWS</h1>

          <p>
            Through this project we “believe and hope” this project will bring a
            great, positive, impact and results in the development of women in
            rural and slum areas not only this it will help them economically
            and socially so that with their willing contribution, they could
            benefit the overall growth of women individually as well as family,
            state and country
          </p>
        </div>
      </div>

      <div className="serviceOne-bottom-banner">
        <img
          src={sirviceOne_banner_img}
          alt=""
          className="serviceOne-bottom-img"
        />

        <div className="serviceOne-bottom-info">
          <h2 className="serviceOne-bottom-title">
          Help others so other can adore your help
          </h2>
          <p className="serviceOne-bottom-desc">
          Here at All India Welfare Society, we see the value in everyone. We want to be a catalyst for positive change, and since our beginnings in 2008, we’ve been driven by the same ideas we initially founded our Non-Profit Organization upon support, empowerment, and progress.

          </p>
          <button>Donate Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
