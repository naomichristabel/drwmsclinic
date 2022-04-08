import React from 'react'
import { Link } from 'react-router-dom';

const LinksBox = () => {
    return (
        <div className="col-md-6 col-lg-3 ">
                <h6>Useful Link</h6>
                <div className="info_link-box">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Service</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
    );
}

export default LinksBox;

