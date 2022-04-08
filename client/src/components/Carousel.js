import React from "react";

const Carousel = () => {
  return (
    <section className="client_section">
      <div className="container">
        <div className="heading_container">
          <h2>Testimonial</h2>
        </div>
        <div className="carousel-wrap">
          <div className="owl_carousel">
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src="images/c1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Zoya Hawk <br />
                    <span>Pet Owner</span>
                  </h5>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                  <p>
                    Dipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src="images/c2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Ryan Jonson <br />
                    <span>Pet Owner</span>
                  </h5>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                  <p>
                    Dipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
