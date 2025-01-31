import "./ServiceTwo.scss";
import sirviceOne_banner_img from "../../../assets/images/1.webp";
import food from "../../../assets/images/food.webp";
import empowring from "../../../assets/images/empowring.webp";

const ServiceTwo = () => {
  return (
    <div className="serviceTwo">
      <div className="serviceTwo-banner">
        <img
          src={sirviceOne_banner_img}
          alt=""
        />

        <div className="serviceTwo-info">
          <h2>
            BRIDGING THE GAP BETWEEN THE GOVERNMENT AND THE COMMON MASSES
          </h2>
          <p>
            Know Everything about GOVERNMENT and COMMON MASSES
          </p>
        </div>
      </div>

      <div className="serviceTwo-main-section">
        <div className="serviceTwo-content  content-card">
          <div className="serviceTwo-content-info">
            <h1>EMPLOYMENT GENERATION</h1>

            <p>
              In India, we often need to remember rural India, even though
              68.84% of India comprises villages. The challenges faced by people
              in rural and underprivileged areas in India are very different
              from those in the cities. In cities, we have grown used to a
              certain sense of entitlement. In villages or underprivileged
              areas,
            </p>

            <p className="serviceTwo-content-sm-desc">
              People don’t have access to the luxuries which people in cities
              have access to. The challenges people face in rural or
              underprivileged areas in India can be broadly grouped into a
              livelihood, entitlement, and social and behavioral difficulties.
            </p>
          </div>

          <img src={food}></img>
        </div>

        <div className="serviceTwo-second-content content-card">
          <img src={empowring} alt="" />

          <div className="second-content-info">
            <h1>THE ROLE OF N.G.O</h1>

            <p>
              Our N.G.O All India Welfare Society has always taken the
              initiative to become” the bridge.” and help in filling the gap
              between the common masses.
            </p>

            <p className="second-content-sm-dsc">
              There is always a lack of connectivity between government and
              common masses due to which many development-based projects which
              the government brings out for the growth of people are unheard,
              unused because of missing information. So, we as an N.G.O become a
              helping hand to the people.
            </p>
          </div>
        </div>

        <div className="serviceTwo-third-content content-card">
          <div className="third-content-left">
            <h1>AIWS Team</h1>
            <p>
              We as a team soulfully work
            </p>

            <p className="third-content-sm-desc">
              As per the requirement and needs of the people in the village or
              underprivileged areas registering them to the government schemes
              or yojana such as “Jan Aadhaar card”, ”Palanhar Yojana”,
              ”Berojgari Bhatta Yojana,” Mukhya Mantri Chiranjeevi Swasthya Bima
              Yojana” which the government has made explicitly for the people,
              for their needs, growth, and development for employment and health
              as well so that they may be more benefitted by it.
            </p>
          </div>

          <div className="third-content-right">
            <img src={food} alt="" />

            <h4>
              IT’S ALL ABOUT DEVELOPMENT: –
            </h4>
            <p className="third-content-1-desc">
              There are also many other schemes for education for children
              living in rural and The government has formed underprivileged
              areas, such as Kishori Shakti Yojana, through which we register
              the children for their education.
            </p>
            <p className="third-content-2-desc">
              These are how the N.G.O. has been contributing and helping the
              government reach out to people so that their livelihood,
              entitlement, and social and behavioral-based differences may be
              overcome. This way, we believe our vision of” looking for a better
              India is being fulfilled.”
            </p>
          </div>
        </div>
      </div>

      <div className="serviceTwo-bottom-banner">
        <img
          src={sirviceOne_banner_img}
          alt=""
          className="serviceTwo-bottom-img"
        />

        <div className="serviceTwo-bottom-info">
          <h2>
            Help others so other can adore your help
          </h2>
          <p>
            Here at All India Welfare Society, we see the value in everyone. We
            want to be a catalyst for positive change, and since our beginnings
            in 2008, we’ve been driven by the same ideas we initially founded
            our Non-Profit Organization upon support, empowerment, and
            progress..
          </p>
          <button>Donate Now</button>
          <div className="serviceTwo-user">
            <img src={sirviceOne_banner_img} alt="" />

            <div className="serviceTwo-user-name">
              <p>Ritu Jain</p>
              <p>Secretary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTwo;
