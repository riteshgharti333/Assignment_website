import "./HomePage.scss";

import AboutHome from "../../components/AboutHome/AboutHome";
import Gallery from "../../components/Gallery/Gallery";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import WeDoSection from "../../components/WeDoSection/WeDoSection";
import WorkSection from "../../components/WorkSection/WorkSection";


const HomePage = () => {
  return (
    <div className="homePage">
      <div id="homeSection">
        <HomePageBanner />
      </div>

      <div className="about-Home">
        <AboutHome />
      </div>

      <div id="weDoSection">
        <WeDoSection />
      </div>

      <WorkSection />

      <Gallery />
    </div>
  );
};

export default HomePage;
