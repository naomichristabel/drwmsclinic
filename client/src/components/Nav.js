import React from 'react';
import { Link } from 'react-router-dom';
import { openNav } from '../utils.js';

const Nav = () => {
  return (
    <header className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <span>
              <img style={{marginTop: '65px', width: '240px'}} className="header-logo-image" src="images/Logo.png" alt="wmsjohnson"/>
            </span>
          </Link>
        <div className="" id="">
          {/* <div className="User_option">
            <form className="form-inline my-2  mb-3 mb-lg-0">
              <input type="search" placeholder="Search" />
              <button className="btn   my-sm-0 nav_search-btn" type="submit"> <i className="fa fa-search" aria-hidden="true"></i> </button>
            </form>
          </div> */}

          <div className="custom_menu-btn">
            <button onClick={openNav}>
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>
          </div>
          <div id="myNav" className="overlay">
            <div className="overlay-content">
              <Link to="/">Home</Link>
              <Link to="/appointment">Appointment</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  );
}

export default Nav;