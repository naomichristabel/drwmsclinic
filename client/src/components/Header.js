import React from 'react';
import Nav from "./Nav";
import HeroBox from "./Layout/Box/HeroBox";
import SliderSection from "./Layout/Section/SliderSection";

const Header = () => {
    return (
        <div className="hero_area ">
            <HeroBox image="images/hero-bg.png" />
            <Nav />
            <SliderSection />
      </div>
    );
}

export default Header;