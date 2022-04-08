import React from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

// register lottie and define custom element
defineLordIconElement(loadAnimation);

const SmallCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="box ">
        <div className="img-box">
          <lord-icon
            trigger="loop"
            src={props.image}
            colors="primary:#121331,secondary:#603a16"
            style={{width: '120px', height: '120px'}}
          ></lord-icon>
        </div>
        <div className="detail-box">
          <h5>{props.title}</h5>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
