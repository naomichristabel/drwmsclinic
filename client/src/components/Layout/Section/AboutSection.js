import React from "react";
import DetailBox from "../Box/DetailBox";
import ImgBox from "../Box/ImgBox";

const AboutSection = () => {
  return (
    <section className="about_section ">
      <div className="container">
        <div className="row">
          <ImgBox image="images/hero-bg.png" />
          <DetailBox
            title="About the Doctor"
            content="Dr.W.M.S.Johnson is a doctor with more than 30 years of experience. He started his career as an Assistant Professor. He is presently discharging duty as the Dean of a medical college. Truly a testimony that GOD raises people. He raises the poor from the dust, He lifts the needy from the ash heap to make them sit with nobles and inherit a seat of honour (1 Samuel 2:8 & Psalms 113:7,8)."
            button=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
