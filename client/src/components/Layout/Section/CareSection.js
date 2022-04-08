import React from 'react';
import DetailBox from "../Box/DetailBox";
import ImgBox from "../Box/ImgBox";

const CareSection = () => {
    return (
        <section className="care_section layout_padding">
          <div className="container">
            <div className="row">
              <DetailBox
                title="Best Care For Your Pets"
                content=" It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like"
                button="Contact Us"
              />
              <ImgBox image="images/care.jpg" />
            </div>
          </div>
        </section>
    );
}

export default CareSection;