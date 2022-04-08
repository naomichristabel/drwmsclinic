import React from 'react';

const HeroBox = (props) => {
    return (
        <div className="hero_bg_box">
          <img src={props.image} alt="" />
        </div>

    );
}

export default HeroBox;