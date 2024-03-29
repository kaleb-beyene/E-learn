import React from 'react'


function Studentsection() {
  return (
    <div>
      <div class="header">  
            <div class="header-left">
                <a href="/home" class="logo">
                    <img src="assets/images/logo.png" alt="Logo"/>
                </a>
                <a href="index.html" class="logo logo-small">
                    <img src="assets/img/logo-small.png" alt="Logo" width="30" height="30"/>
                </a>
            </div>
                 
            <div class="top-nav-search">
                <form>
                    <input type="text" class="form-control" placeholder="Search here"/>
                    <button class="btn" type="submit"><i class="flaticon-magnifying-glass"></i></button>
                </form>
            </div>
            <a class="mobile_btn" id="mobile_btn">
                <i class="fas fa-bars"></i>
            </a>
            <ul class="nav user-menu">
                <li class="nav-item dropdown noti-dropdown me-2">
                    <a href="#" class="dropdown-toggle nav-link header-nav-list" data-bs-toggle="dropdown">
                        <img src="assets/images/icon/header-icon-05.svg" alt=""/>
                    </a>
                
                </li>
               
              
                
                
                <li class="nav-item dropdown has-arrow new-user-menus">
                    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <div class="user-img">
                            <img class="rounded-circle" src="assets/images/author/author-03.jpg" width="31" alt="Ryan Taylor"/>
                          
                        </div>
                    </a>
                    <div class="dropdown-menu">
                        <div class="user-header">
                            <div class="avatar avatar-sm">
                                <img src="assets/images/author/author-03.jpg" alt="User Image" class="avatar-img rounded-circle"/>
                            </div>
                            <div class="user-text">
                                
                                
                            </div>
                        </div>
                        <a class="dropdown-item" href="/profile">My Profile</a>
                        
                        <a class="dropdown-item" href="/login">Logout</a>
                    </div>
                </li>

            </ul>   
        </div>
        <div class="sidebars" id="sidebars">
                <div class="sidebar-inner slimscroll">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title"> 
								<span>Main Menu</span>
							</li>
                            <li> 
                   <a href="/Dashbord"> <i class="fas fa-house"></i> <span>Dashboard</span></a>
                     </li>
                          <li> 
                     <a href="mycourses"><i class="fas fa-book-reader"></i> <span>My courses</span></a>
                     </li>
							<li class="submenu">
								<a href="#"><i class="fas fa-clipboard"></i> <span> Invoices</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><a href="invoices.html">Invoices List</a></li>
									<li><a href="invoice-grid.html">Invoices Grid</a></li>
									<li><a href="add-invoice.html">Add Invoices</a></li>
									<li><a href="edit-invoice.html">Edit Invoices</a></li>
									<li><a href="view-invoice.html">Invoices Details</a></li>
									<li><a href="invoices-settings.html">Invoices Settings</a></li>
								</ul>
							</li>
							<li class="menu-title"> 
								<span>Management</span>
							</li>
							<li class="submenu">
								<a href="#"><i class="fas fa-file-invoice-dollar"></i> <span> Accounts</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><a href="fees-collections.html">Fees Collection</a></li>
									<li><a href="expenses.html">Expenses</a></li>
									<li><a href="salary.html">Salary</a></li>
									<li><a href="add-fees-collection.html">Add Fees</a></li>
									<li><a href="add-expenses.html">Add Expenses</a></li>
									<li><a href="add-salary.html">Add Salary</a></li>
								</ul>
							</li>
							<li class="submenu">
                                <a href="#"><i class="fa fa-newspaper"></i> <span> Blogs</span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul>
                                    <li><a href="blog.html">All Blogs</a></li>
                                    <li><a href="add-blog.html">Add Blog</a></li>
                                    <li><a href="edit-blog.html">Edit Blog</a></li>  
                                </ul>
                            </li>
							<li> 
								<a href="settings.html"><i class="fas fa-cog"></i> <span>Settings</span></a>
							</li>
							<li class="menu-title"> 
								<span>Pages</span>
							</li>
							
								</ul>
					</div>
                </div>
            </div>
            <div class="page-wrapper">
                <div class="content container-fluid">
					<div class="page-header">
						<div class="row">
							<div class="col-sm-12">
								<div class="page-sub-header">
									<h3 class="page-title">Welcome!</h3>	
								</div>
							</div>
						</div>
					</div>
                    <div class="row">
                    <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                    <div class="card bg-comman w-100">
								<div class="card-body">
									<div class="db-widgets d-flex justify-content-between align-items-center">
										<div class="db-info">
											<h6>Students</h6>
											<h3>50055</h3>
										</div>	
										<div class="db-icon">
											<img  src="assets/images/icon/dash-icon-01.svg"  alt="Dashboard Icon"/>
										</div>
									</div>
								</div>
							</div>
                                       
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
					</div>
					
					
						
				</div>
				
			</div> 
    </div>
  )
}

export default Studentsection
