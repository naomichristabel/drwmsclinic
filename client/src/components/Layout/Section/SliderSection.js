import React from "react";
import { Link, useLocation } from "react-router-dom";

const SliderSection = () => {
  const location = useLocation();

  return (
    <section className="slider_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="detail-box">
              <h1>
                Virtual Consultation
                <br /> Clinic <br />
              </h1>
              <p>
                Virtual Consultation Clinic is a reality in Pandemic World to
                establish planned scheduled meeting of Healthcare worker and
                patient seeking Consultation, Advice & Treatment plan. We offer
                services that are Affordable & Accessible. It covers full
                spectrum of Preventive, Promotive, Curative and Palliative
                services.
              </p>
              {location.pathname !== "/appointment" && (
                <Link to="/appointment">Book Your Appointment</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
