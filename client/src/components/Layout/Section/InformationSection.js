import React from "react";
import AboutBox from "../Box/InformationBox/AboutBox";
import AddressBox from "../Box/InformationBox/AddressBox";
import LinksBox from "../Box/InformationBox/LinksBox";
import SocialBox from "../Box/InformationBox/SocialBox";

const InformationSection = () => {
  return (
    <section className="info_section layout_padding2">
      <div className="info_container ">
        <div className="container">
          <div className="row">
            <AboutBox />
            <LinksBox />
            <AddressBox />
            <SocialBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
