import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="header-section">
    <div className="header-top d-none d-lg-block">
        <div className="container">
         <div className="header-top-wrapper">
                <div className="header-top-left">
                    <p>All course 28% off for Liberian people’s.</p>
                </div>
                <div className="header-top-medal">
                    <div className="top-info">
                        <p><i className="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
                        <p><i className="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
                    </div>
                </div>
                <div className="header-top-right">
                    <ul className="social">
                        <li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"><i className="flaticon-facebook"></i></a></li>
                        <li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"><i className="flaticon-twitter"></i></a></li>
                        <li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"><i className="flaticon-skype"></i></a></li>
                        <li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"><i className="flaticon-instagram"></i></a></li>
                    </ul>
                </div>
            </div>  
        </div>
    </div>   
    <div className="header-main">
        <div className="container">
            <div className="header-main-wrapper">
                <div className="header-logo">
                    <a href="index"><img src="assets/images/logo.png" alt="Logo"/></a>
                </div>
                <div className="header-menu d-none d-lg-block">
                    <ul className="nav-menu">
                        <li><Link to="/Home">Home</Link></li>
                        <li>
                            <a href="/Courses"> Courses</a>
                           
                        </li>
                        <li>
                            <a href="#">Pages </a>
                            <ul className="sub-menu">
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Register">Register</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/FAQ">FAQ</Link></li>
                                <li><Link to="/Error404">404 Error</Link></li>
                                <li><Link to="/AfterEnroll">After Enroll</Link></li>
                                <li><Link to="/Admin">Instructor Dashboard (Course List)</Link></li>
                                <li><a href="overview.html">Instructor Dashboard (Performance)</a></li>
                                <li><a href="/student">Students</a></li>
                                <li><a href="Reviews">Reviews</a></li>
                                <li><a href="/engagement">Course engagement</a></li>
                                <li><a href="traffic-conversion.html">Traffic & conversion</a></li>
                                <li><a href="messages.html">Messages</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#">Blog</a>
                                    <ul className="sub-menu">
                                        <li><Link to="Blog">Blog</Link></li>
                                       
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Blog Details</a>
                                    <ul className="sub-menu">
                                    <li><Link to="/Blog-Details">Blog Details Left Sidebar</Link></li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
    
                </div>
    
                <div className="header-sign-in-up d-none d-lg-block">
                    <ul>
                        <li><Link to="/Login">Sign In</Link></li>
                       <li> <Link className="sign-up" to="/Register">Sign Up</Link></li>  
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
  )
}

export default Header
