import "./AboutHome.scss";

import about_1 from "../../assets/images/h/about1.jpeg";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

import about_2 from "../../assets/images/service2.jpeg";
import { awards } from "../../assets/data";

const AboutHome = () => {
  return (
    <div className="aboutHome">
      <div className="about-home-content">
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
            <RiArrowRightSLine className="button-icon" />
          </Link>
        </div>

        <div className="aboutHome-right">
          <img src={about_1} alt={about_1} />
        </div>
      </div>

      <div className="about-home-content2">
        <div className="about-home-content2-img">
          <img src={about_1} alt="" />
          <h3>
            Young Entrepreneur Rahim Khatri (Poona Wala) Sets New Milestones in
            Business & Social Service
          </h3>
        </div>
        <div className="about-home-content2-bottom">
          <div className="about-home-content2-bottom-left">
            <p>
              Sikar, India: It is said that with unwavering faith and good
              intentions, one can achieve any goal in life. Today, in our
              "Personal Introduction" section, we bring you the inspiring story
              of Dr. Rahim Khatri (Poona Wala), a young entrepreneur whose
              journey is marked by faith, hard work, and destiny.
            </p>
            <p>
              The Shekhawati region of Rajasthan is known for its contributions
              to education and national service. However, the people of
              Shekhawati have also made a distinct mark in the world of business
              and philanthropy. One such distinguished entrepreneur is Dr. Rahim
              Khatri, founder of BK Group, who is not only a successful
              businessman but also actively involved in welfare initiatives.
            </p>
          </div>

          <div className="about-home-content2-bottom-right">
            <img src={about_1} alt="" />
            <p>
              Recently, BK Group introduced India's first ethanol fuel pump,
              which gained widespread recognition and appreciation across the
              country. Here’s his journey to success, in his own words:
            </p>
          </div>
        </div>
      </div>

      <div className="about-home-content3">
        <h3>Dr. Rahim Khatri’s Special Message to Society</h3>

        <div className="about-home-content3-top">
          <p>
            Dr. Khatri emphasizes the importance of practicing Islamic teachings
            in daily life rather than just theoretical belief. He urges the
            community to adopt practical faith, as demonstrated by the Prophet
            Muhammad (PBUH).
          </p>
          <img src={about_1} alt="" />
          <p>
            He particularly calls for an end to dowry practices and encourages
            people to embrace the simplicity of Sunnah-based marriages. He
            believes that if societal leaders truly embody the values they
            preach, only then will meaningful change occur.
          </p>
        </div>

        <div className="about-home-content3-bottom">
          <p>
            He further stresses that religion is not limited to prayer and
            charity but extends to every aspect of life. He appeals to community
            leaders to lead by example rather than merely advising others.
            According to him, spending excessively on weddings should be
            reconsidered, and instead, investing in education should be
            prioritized.
          </p>
        </div>
      </div>

      <div className="about-home-content4">
        <div className="about-home-content4-left">
          <img src={about_1} alt="" />
          <p>
            His vision: To uplift society, we must first uplift our children and
            youth.
          </p>
        </div>

        <div className="about-home-content4-right">
          <h3>The Need to Focus on Education</h3>
          <p>
            Dr. Rahim Khatri highlights that children today possess immense
            talent but lack the proper motivation and guidance. Many youth are
            losing direction, engaging in negative activities, and need strong
            mentorship.
          </p>
          <p>
            To guide and inspire the youth, he is organizing a seminar in Sikar,
            featuring Munawwar Jama, a renowned motivational speaker.
            Additionally, his initiative aims to support bright students from
            underprivileged backgrounds by covering their educational expenses.
          </p>
        </div>
      </div>

      <div className="about-home-content5">
        <h3>Empowering Blind & Hearing-Impaired Children</h3>

        <div className="about-home-content5-bottom">
          <div className="about-home-content5-left">
            <img src={about_1} alt="" />
            <p>
              In 2013, Dr. Khatri helped establish the Vision School &
              Rehabilitation Center in Pune, Maharashtra—the first institution
              in the state dedicated to providing both religious and modern
              education to visually and hearing-impaired children.
            </p>
          </div>

          <div className="about-home-content5-right">
            <img src={about_1} alt="" />
            <p>
              The school currently supports 220 students from 15 states across
              India, providing them with education from primary to postgraduate
              levels, along with training in computers and advanced technology.
              The institution also integrates specialized tools, such as:
            </p>

            <ul>
              <li>Orbit Readers & Jazz Screen Readers</li>
              <li>Modern Assistive Devices</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-home-content6">
        <h3>Success in Business: More Than Just Money</h3>
        <p>
          Dr. Rahim Khatri strongly believes that money alone is not enough to
          start a business. Instead, he advises young entrepreneurs to first
          learn the intricacies of their chosen field and commit wholeheartedly
          to their goals.
        </p>
        <img src={about_2} alt="" />
        <p className="thought">
          "If you achieve a milestone, set your next target and dedicate
          yourself completely to it. Your hard work and pure intentions will
          never go in vain."
        </p>
      </div>

      <div className="about-home-content7">
        <div className="about-home-content7-left">
          <h3>His Journey from Struggle to Success</h3>
          <p>
            Born in Sikar, Rajasthan, Dr. Khatri’s financial hardships forced
            him to drop out after the 10th grade in 2004. After two years of
            struggle, he moved to Mumbai in 2006 with dreams of working abroad.
            However, he was scammed by an agent, leaving him stranded.
          </p>
          <p>
            Determined to succeed, he took a ₹5,000/month job at a petrol pump,
            gradually learning the industry. His innovative approach to
            modernizing fuel station operations impressed his employers, leading
            to his selection as a vendor for Bharat Petroleum in 2012.
          </p>
        </div>
        <div className="about-home-content7-right">
          <img src={about_1} alt="" />
        </div>
      </div>

      <div className="about-home-content8">
        <h3>Foundation of BK Group</h3>

        <div className="about-home-content8-bottom">
          <p>
            After gaining experience, he established BK Enterprises in Pune,
            which is now one of the leading companies in developing petrol
            stations across India.
          </p>
          <img src={about_1} alt="" />
          <p>
            Despite several financial setbacks, he remained committed to
            integrity and hard work. He recalls an instance where, despite
            needing money himself, he prioritized helping someone in need, and
            soon after, his own business flourished.
          </p>
        </div>

        <p className="thought">
          "My belief in God and my honest intentions have always guided me
          toward success."
        </p>
      </div>

      <div className="about-home-content9">
        <h3>Recognitions & Awards</h3>
        <p>
          For his remarkable contributions to society, Dr. Khatri has received
          multiple honors, including:
        </p>

        <div className="about-home-content9-container">
          {awards.map((award) => (
            <div className="about-home-content9-img" key={award.title}>
              <img src={award.img} alt="" />
              <p>{award.title}</p>
            </div>
          ))}
        </div>

        <p className="about-home-content9-sm">
          Through his business and philanthropic efforts, Dr. Rahim Khatri
          continues to empower communities, uplift the underprivileged, and
          inspire young entrepreneurs.
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
