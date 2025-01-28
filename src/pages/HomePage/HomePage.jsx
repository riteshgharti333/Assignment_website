import Gallery from "../../components/Gallery/Gallery";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import WeDoSection from "../../components/WeDoSection/WeDoSection";
import WorkSection from "../../components/WorkSection/WorkSection";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div id="homeSection">
        <HomePageBanner />
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
