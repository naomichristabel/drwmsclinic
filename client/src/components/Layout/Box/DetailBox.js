import React from 'react';

const DetailBox = (props) => {
    return (
        <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>{props.title}</h2>
                  </div>
                  <p>
                    {props.content}
                  </p>
                  <a href="">{props.button}</a>
                </div>
              </div>
    );
}

export default DetailBox;