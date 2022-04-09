import React from "react";
import DetailBox from "../Box/DetailBox";
import ImgBox from "../Box/ImgBox";

const AboutSection = () => {
  return (
    <section className="about_section ">
      <div className="container">
        <div className="row">
          <ImgBox image="images/about-img.jpg" />
          <DetailBox
            title="About Us"
            content="Minima cupiditate fuga animi unde nesciunt esse, voluptas
              vitae culpa ut impedit quae, totam eum in quis non velit!
              Aliquid libero voluptas quisquam magnam porro hic atque at
              numquam vel. Veritatis, magni deleniti optio quod quo nisi
              repellat quasi quia."
            button="Read More"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
