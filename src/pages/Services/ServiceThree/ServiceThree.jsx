import "./ServiceThree.scss";
import sirviceOne_banner_img from "../../../assets/images/1.webp";
import empowring from "../../../assets/images/empowring.webp";

import food from "../../../assets/images/food.webp";

const ServiceThree = () => {
  return (
    <div className="serviceThree">
      <div className="serviceThree-banner">
        <img
          src={sirviceOne_banner_img}
          alt=""
        />

        <div className="serviceThree-info">
          <h2>YOUTH DEVELOPMENT</h2>
          <p>
            Know What it Really means for YOUTH DEVELOPMENT For AIWS
          </p>
        </div>
      </div>

      <div className="serviceThree-main-section">
        <div className="serviceThree-content">
          <div className="serviceThree-content-info">
            <h1>THE ROLE OF N.G.O</h1>

            <p>
              As we all know ‘The integrated development of the nation depends
              upon a healthy youth’.
            </p>

            <p className="serviceThree-content-sm-desc">
              So, our N.G.O – A.I.W.S that is “ALL INDIA WELFARE SOCIETY”
              soulfully took an initiative to construct a program that helps in
              the welfare of the youth in our society. This program was named
              ‘Youth Development’ and under this program, many of our social
              workers took an individual project that may help in the
              development of youth in rural and urban areas of Rajasthan such as
              community services, mentoring programs, raising funds, and
              connecting them to international N.G.O, etc.
            </p>
          </div>

          <img src={food}></img>
        </div>
      </div>

      <div className="serviceThree-center-banner">
        <img
          src={sirviceOne_banner_img}
          alt=""
        />

        <div className="serviceThree-center-info">
          <h2>
            Peace Building Projects​
          </h2>
          <p>
            MAJOR 9 PROJECTS taken by each individual are:​
          </p>
        </div>
      </div>

      <div className="project">
        <div className="project-container">
          <h1>PEACE BUILDING PROJECT</h1>
          <p>
            This project was executed by Jatin Deewan. where he with his whole
            team organized a session that was known as “peacebuilding session”
            in underprivileged areas such as rural, slum areas and also with
            that we registered them with schemes that were provided by the
            government that is “Berojgari Bhatta” scheme especially for
            generation of employment for the people of that area for income in
            which 20 females got selected and they are still getting income
            through that scheme.
          </p>
          <div className="project-user">
            <img src={sirviceOne_banner_img} alt="" />

            <div className="project-user-name">
              <p>Ritu Jain</p>
              <p>Secretary</p>
            </div>
          </div>
        </div>

        <div className="project-container">
          <h1>PEACE BUILDING PROJECT</h1>
          <p>
            This project was executed by Jatin Deewan. where he with his whole
            team organized a session that was known as “peacebuilding session”
            in underprivileged areas such as rural, slum areas and also with
            that we registered them with schemes that were provided by the
            government that is “Berojgari Bhatta” scheme especially for
            generation of employment for the people of that area for income in
            which 20 females got selected and they are still getting income
            through that scheme.
          </p>
          <div className="project-user">
            <img src={sirviceOne_banner_img} alt="" />

            <div className="project-user-name">
              <p>Ritu Jain</p>
              <p>Secretary</p>
            </div>
          </div>
        </div>


        <div className="project-container">
          <h1>PEACE BUILDING PROJECT</h1>
          <p>
            This project was executed by Jatin Deewan. where he with his whole
            team organized a session that was known as “peacebuilding session”
            in underprivileged areas such as rural, slum areas and also with
            that we registered them with schemes that were provided by the
            government that is “Berojgari Bhatta” scheme especially for
            generation of employment for the people of that area for income in
            which 20 females got selected and they are still getting income
            through that scheme.
          </p>
          <div className="project-user">
            <img src={sirviceOne_banner_img} alt="" />

            <div className="project-user-name">
              <p>Ritu Jain</p>
              <p>Secretary</p>
            </div>
          </div>
        </div>


        <div className="project-container">
          <h1>PEACE BUILDING PROJECT</h1>
          <p>
            This project was executed by Jatin Deewan. where he with his whole
            team organized a session that was known as “peacebuilding session”
            in underprivileged areas such as rural, slum areas and also with
            that we registered them with schemes that were provided by the
            government that is “Berojgari Bhatta” scheme especially for
            generation of employment for the people of that area for income in
            which 20 females got selected and they are still getting income
            through that scheme.
          </p>
          <div className="project-user">
            <img src={sirviceOne_banner_img} alt="" />

            <div className="project-user-name">
              <p>Ritu Jain</p>
              <p>Secretary</p>
            </div>
          </div>
        </div>

       
      </div>

      <div className="sm-projects">
        <div className="sm-project">
          <h1>RATION-KIT PROJECT</h1>

          <p>
            This project was carried by Chanchal Jain who applied for ration-kit
            for the people who were in distress when the second lock down came
            and she gave out ration-kit to 20 families with funding she raised
          </p>

          <div className="sm-project-user">
            <img src={sirviceOne_banner_img} alt="" />

            <div className="sm-project-user-name">
              <p>Ritu Jain</p>
              <p>Secretary</p>
            </div>
          </div>
        </div>

        <div className="sm-project">
          <h1>RATION-KIT PROJECT</h1>

          <p>
            This project was carried by Chanchal Jain who applied for ration-kit
            for the people who were in distress when the second lock down came
            and she gave out ration-kit to 20 families with funding she raised
          </p>

          <div className="sm-project-user">
            <img src={sirviceOne_banner_img} alt="" />

            <div className="sm-project-user-name">
              <p>Ritu Jain</p>
              <p>Secretary</p>
            </div>
          </div>
        </div>
       
      </div>

      <div className="serviceThree-bottom-banner">
        <div className="serviceThree-bottom-banner-info">
          <h2>YOUTH DEVELOPMENT</h2>
          <p>
            Not only these social workers but throughout India during these
            tough times there are many other social workers who have done many
            projects for Youth Development Program and we ,as an NGO have been
            helping them to provide with funds .
          </p>
          <div className="serviceThree-bottom-buttons">
          <button>Donate Now</button>
          <button>Contact Us | Join Us</button>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default ServiceThree;
