import React from 'react';
import SmallCard from '../../SmallCard';

const SmallCardSection = () => {
    return (
        <section className="service_section layout_padding">
        <div className="container py_mobile_45">
          <div className="heading_container heading_center">
            <h2> Our Services </h2>
          </div>
          <div className="row">
            <SmallCard
              image="https://cdn.lordicon.com/hdiorcun.json"
              title="Patient Care"
              content="Trying to offer best in class medical services in the last three decades. Our focus is on patient care & safety. We are committed to exemplary service by His Grace. We treat, God Heals. By His stripes we are healed. 1 Peter 2:24"
            />

            <SmallCard
              image="https://cdn.lordicon.com/soseozvi.json"
              title="Remote Video Consultation"
              content="Remote video consultation between Doctor and patient is increasingly acceptable and possible. This saves time on commutation. Comes in handy for people living in far off places and those who cannot be taken to clinic."
            />

            <SmallCard
              image="https://cdn.lordicon.com/mtdulhdc.json"
              title="Skip The Queue"
              content="We understand the value of time and hence you can skip the queue by taking a slot mutually convenient. Avoid the traffic to reach us from the convenience of your home. All that you need is a mobile/tab to see us."
            />
          </div>
          {/* <div className="btn-box">
            <Link to="/">About the Doctor</Link>
          </div> */}
        </div>
      </section>
    );
}

export default SmallCardSection;