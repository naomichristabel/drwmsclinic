import React from 'react'

const SocialBox = () => {
    return (
        <div className="col-md-6 col-lg-3 ">
              <div className="info_form ">
                <h5>Newsletter</h5>
                <form action="#">
                  <input type="email" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </form>
                <div className="social_box">
                  <a href="http://www.facebook.com">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="http://www.twitter.com">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="http://www.linkedin.com">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="http://www.instagram.com">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="http://www.youtube.com">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
    );
}

export default SocialBox;


              