import React from 'react'

const AddressBox = () => {
    return (
        <div className="col-md-6 col-lg-3 ">
        <h6>Address</h6>
        <div className="contact_items">
          <a href="https://www.google.com/maps">
            <div className="item ">
              <div className="img-box ">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="detail-box">
                <p>Location</p>
              </div>
            </div>
          </a>
          {/* <a href=""> */}
            <div className="item ">
              <div className="img-box ">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="detail-box">
                <p>Call +91 9841201965</p>
              </div>
            </div>
          {/* </a> */}
          <a href="mailto: drwmsvirtualclinic@gmail.com">
            <div className="item ">
              <div className="img-box ">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="detail-box">
                <p>drwmsvirtualclinic@gmail.com</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
}

export default AddressBox;