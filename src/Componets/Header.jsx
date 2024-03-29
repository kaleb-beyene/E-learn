import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header-section">
      <div className="header-main">
        <div className="container">
          <div className="header-main-wrapper">
            <div className="header-logo">
              <a href="index">
                <img src="assets/images/logo-icon.png" alt="Logo" />
              </a>
            </div>
            <div className="header-menu d-none d-lg-block">
              <ul className="nav-menu">
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <a href="/Courses"> Courses</a>
                </li>
                <li>
                  <a href="#">Pages </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <Link to="/Admin">Instructor Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/Dashboard">Students</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/Blog">Blog</a>
                  
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="header-sign-in-up d-none d-lg-block">
              <ul>
                <li>
                  <Link to="/Login">Sign In</Link>
                </li>
                <li>
                  
                  <Link className="sign-up" to="/Register">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-toggle d-lg-none">
              <a className="menu-toggle" href="javascript:void(0)">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
