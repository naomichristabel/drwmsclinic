import React, { Fragment } from "react";
import SmallCardSection from "../components/Layout/Section/SmallCardSection";
import AboutSection from "../components/Layout/Section/AboutSection";
import InformationSection from "../components/Layout/Section/InformationSection";

const HomePage = () => {
  return (
    <Fragment>
      <div className="main_content">
        <SmallCardSection />
        <AboutSection />
        {/* <CareSection />
        <Carousel /> */}
      </div>
      <br /><br /><br />
      <InformationSection />
    </Fragment>
  );
};

export default HomePage;
