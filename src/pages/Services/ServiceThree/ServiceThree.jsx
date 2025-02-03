import "./ServiceThree.scss";
import serviceOne_banner_img from "../../../assets/images/1.webp";
import serviveOne_1 from "../../../assets/images/helmet.jpeg";
import Gallery from "../../../components/Gallery/Gallery";

const ServiceThree = () => {
  return (
    <div className="serviceThree">
      <div className="serviceThree-banner">
        <img src={serviceOne_banner_img} alt="" />

        <div className="serviceThree-info">
          <h2>YOUTH DEVELOPMENT</h2>
          <p>Know What Youth Development Really Means for BK Welfare Society</p>
        </div>
      </div>

      <div className="serviceThree-main-section">
        <div className="serviceThree-content">
          <div className="serviceThree-content-info">
            <h1>THE ROLE OF N.G.O</h1>

            <p>
              As we all know, “The integrated development of the nation depends
              upon a healthy youth.”
            </p>

            <p className="serviceThree-content-sm-desc">
              Our N.G.O – BK Welfare Society has taken a strong initiative to
              launch a program dedicated to the welfare and empowerment of youth
              in our society. This program, named ‘Youth Development,’ focuses
              on various community services, mentoring programs, fundraising,
              and connecting youth to national and international welfare
              organizations.
            </p>

            <p className="serviceThree-content-sm-desc">
              Our social workers are actively working on individual projects to
              uplift and develop the youth in rural and urban areas of
              Rajasthan.
            </p>
          </div>

          <img src={serviveOne_1}></img>
        </div>
      </div>

      <div className="serviceThree-center-banner">
        <img src={serviceOne_banner_img} alt="" />

        <div className="serviceThree-center-info">
          <h2>MAJOR PROJECTS UNDER YOUTH DEVELOPMENT</h2>
        </div>
      </div>

      <div className="project">
        <div className="project-container">
          <h1>PEACE BUILDING PROJECT</h1>
          <p className="led-by">Led by: Khalid Khatri</p>
          <p>
            Khalid Khatri and his team conducted ‘Peace-Building Sessions’ in
            underprivileged areas, including rural and slum communities. During
            these sessions, they educated the youth about conflict resolution,
            social harmony, and government welfare schemes.
          </p>
          <p>
            One of the key impacts of this initiative was the registration of 20
            women under the government’s “Berojgari Bhatta” scheme, which
            supports unemployed individuals with financial aid. These women are
            now receiving regular income through the scheme, helping them become
            financially independent.
          </p>
          <div className="project-user">
            <img src={serviceOne_banner_img} alt="" />

            <div className="project-user-name">
              <p>Abdul Rahman Khatri</p>
              <p>Secretary</p>
            </div>
          </div>
        </div>

        <div className="project-container">
          <h1>BLANKET DISTRIBUTION FOR WINTER</h1>
          <p className="led-by">Led by: Khalid Khatri</p>

          <p>
            To support the homeless and underprivileged communities during the
            harsh winter, Khalid Khatri took the initiative to distribute
            blankets in various regions of Rajasthan. With the funds raised, his
            team provided warm blankets to over 50 families struggling to
            survive in extreme cold conditions.
          </p>
          <p>
            This initiative ensured that the elderly, children, and daily wage
            workers had protection against the winter chills.
          </p>
          <div className="project-user">
            <img src={serviceOne_banner_img} alt="" />

            <div className="project-user-name">
              <p>Abdul Rahman Khatri</p>
              <p>Secretary</p>
            </div>
          </div>
        </div>

        <div className="project-container">
          <h1>HELMET DISTRIBUTION FOR ROAD SAFETY</h1>
          <p className="led-by">Led by: Khalid Khatri</p>

          <p>
            Understanding the increasing road accidents and fatalities, Khalid
            Khatri launched a Helmet Distribution and Road Safety Awareness
            Campaign. His team conducted workshops in schools, colleges, and
            local markets to educate youth and daily commuters on the importance
            of wearing helmets and following traffic rules.
          </p>
          <p>
            As part of the campaign, over 100 helmets were distributed to
            students, delivery riders, and workers who frequently travel on
            two-wheelers but cannot afford safety gear.
          </p>
          <p>
            This project aimed to create a culture of responsible riding and
            road safety awareness.
          </p>
          <div className="project-user">
            <img src={serviceOne_banner_img} alt="" />

            <div className="project-user-name">
              <p>Abdul Rahman Khatri</p>
              <p>Secretary </p>
            </div>
          </div>
        </div>
      </div>

      <div className="serviceThree-bottom-banner">
        <div className="serviceThree-bottom-banner-info">
          <h2>CONTINUING OUR MISSION</h2>
          <p>
            Not only these social workers, but many others across India have
            contributed to the Youth Development Program during tough times. As
            an NGO, BK Welfare Society continues to support these initiatives by
            providing funds, resources, and networking opportunities to help
            bring a positive change.
          </p>
          <p>
            We believe that by empowering the youth today, we build a stronger
            and brighter future for tomorrow.
          </p>
          <p>Join us in making a difference!</p>
        </div>
      </div>

      <div className="galleryCards">
        <Gallery />
      </div>
    </div>
  );
};

export default ServiceThree;
