import React from "react";

const ImgBox = (props) => {
  return (
    <div className="col-md-6">
      <div className="img-box">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default ImgBox;
