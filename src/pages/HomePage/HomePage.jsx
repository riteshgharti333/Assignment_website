import React, { Suspense, lazy } from "react";
import "./HomePage.scss";

// Lazy load components
const HomePageBanner = lazy(() => import("../../components/HomePageBanner/HomePageBanner"));
const WeDoSection = lazy(() => import("../../components/WeDoSection/WeDoSection"));
const WorkSection = lazy(() => import("../../components/WorkSection/WorkSection"));
const Gallery = lazy(() => import("../../components/Gallery/Gallery"));

const HomePage = () => {
  return (
    <div className="homePage">
      <Suspense fallback={<div>Loading...</div>}>
        <div id="homeSection">
          <HomePageBanner />
        </div>

        <div id="weDoSection">
          <WeDoSection />
        </div>

        <WorkSection />

        <Gallery />
      </Suspense>
    </div>
  );
};

export default HomePage;