import React from "react";
import ImgBox from "../components/Layout/Box/ImgBox";
import DetailBox from "../components/Layout/Box/DetailBox";

const NonePage = () => {
  return (
    <section className="about_section ">
      <div className="container">
        <div className="row">
          <ImgBox image="images/under-construction.jpg" />
          <DetailBox
            title="PAGE UNDER CONSTRUCTION"
            content=""
            button=""
          />
        </div>
      </div>
    </section>
  );
};

export default NonePage;
