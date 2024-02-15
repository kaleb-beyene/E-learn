import React from 'react'

function Editstudent() {
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
			<div class="menu-toggle">
					<a href="javascript:void(0);" id="toggle_btn">
						<i class="fas fa-bars"></i>
					</a>
				</div>         
            <div class="top-nav-search">
                <form>
                    <input type="text" class="form-control" placeholder="Search here"/>
                    <button class="btn" type="submit"><i class="flaticon-magnifying-glass"></i></button>
                </form>
            </div>
            <ul class="nav user-menu">
                <li class="nav-item dropdown noti-dropdown me-2">
                    <a href="#" class="dropdown-toggle nav-link header-nav-list" data-bs-toggle="dropdown">
                        <img src="assets/images/icon/header-icon-05.svg" alt=""/>
                    </a>
                    <div class="dropdown-menu notifications">
                        <div class="topnav-dropdown-header">
                            <span class="notification-title">Notifications</span>
                            <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                        </div>
                        <div class="noti-content">
                            <ul class="notification-list">
                                <li class="notification-message">
                                    <a href="#">
                                        <div class="media d-flex">
                                            <span class="avatar avatar-sm flex-shrink-0">
                                                <img class="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg"/>
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Carlson Tech</span> has approved <span class="noti-title">your estimate</span></p>
                                                <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="#">
                                        <div class="media d-flex">
                                            <span class="avatar avatar-sm flex-shrink-0">
                                                <img class="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-11.jpg"/>
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">International Software Inc</span> has sent you a invoice in the amount of <span class="noti-title">$218</span></p>
                                                <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="#">
                                        <div class="media d-flex">
                                            <span class="avatar avatar-sm flex-shrink-0">
                                                <img class="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-17.jpg"/>
                                            </span>
                                            <div class="media-body flex-grow-1">
                                            <p class="noti-details"><span class="noti-title">John Hendry</span> sent a cancellation request <span class="noti-title">Apple iPhone XR</span></p>
                                            <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="#">
                                        <div class="media d-flex">
                                            <span class="avatar avatar-sm flex-shrink-0">
                                                <img class="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-13.jpg"/>
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Mercury Software Inc</span> added a new product <span class="noti-title">Apple MacBook Pro</span></p>
                                                <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="topnav-dropdown-footer">
                            <a href="#">View all Notifications</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown has-arrow new-user-menus">
                    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <div class="user-img">
                            <img class="rounded-circle" src="assets/images/author/author-03.jpg" width="31" alt="Ryan Taylor"/>
                            <div class="user-text">
                               
                                
                            </div>
                        </div>
                    </a>
                    <div class="dropdown-menu">
                        <div class="user-header">
                            <div class="avatar avatar-sm">
                                <img src="assets/images/author/author-03.jpg" alt="User Image" class="avatar-img rounded-circle"/>
                            </div>
                            <div class="user-text">
                                
                                <p class="text-muted mb-0">Administrator</p>
                            </div>
                        </div>
                        <a class="dropdown-item" href="/profile">My Profile</a>
                        <a class="dropdown-item" href="inbox.html">Inbox</a>
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
								<span>Dashboard</span>
							</li>
							
							<li class="submenu">
								<a href="/List"><i class="fas fa-graduation-cap"></i> <span> Students</span> </a>
							</li>
							
							<li class="submenu">
								<a href="/Coursesection"><i class="fas fa-book-reader"></i> <span>courses</span></a>
							</li>
							
							
							
						
							<li> 
								<a href="/profile"><i class="fas fa-cog"></i> <span>Settings</span></a>
							</li>
							<li class="menu-title"> 
								<span>Authentication</span>
							</li>
							
							<li><a href="/"><i class="fas fa-logout"></i><span>Login</span></a></li>
							<li><a href="/"><i class="fas fa-login"></i><span>Registeration</span></a></li>
							<li><a href="/"><i class="fas fa-logout"></i><span>Login</span></a></li>
							<li><a href="/"><i class="fas fa-logout"></i><span>Login</span></a></li>
							
								</ul>
					</div>
                </div>
            </div>
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col-sm-12">
								<div class="page-sub-header">
									<h3 class="page-title">Add Students</h3>
									
								</div>
							</div>
						</div>
					</div>
					
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card comman-shadow">
								<div class="card-body">
									<form>
										<div class="row">
											<div class="col-12">
												<h5 class="form-title student-info">Student Information <span><a href="javascript:;"><i class="feather-more-vertical"></i></a></span></h5>
											</div>
											<div class="col-12 col-sm-4">  
												<div class="form-group local-forms">
													<label >First Name <span class="login-danger"></span></label>
													<input class="form-control" type="text" placeholder="Enter First Name" />
												</div>
											</div>
											<div class="col-12 col-sm-4">
												<div class="form-group local-forms">
													<label >Last Name <span class="login-danger">*</span></label>
													<input class="form-control" type="text" placeholder="Enter First Name" />
												</div>
											</div>
											<div class="col-12 col-sm-4">
												<div class="form-group local-forms">
													<label >Gender <span class="login-danger">*</span></label>
													<select class="form-control select">
														<option>Female</option>
														<option>Male</option>
													  </select>
												</div>
											</div>
											
											
											
											
											<div class="col-12 col-sm-4">
												<div class="form-group local-forms">
													<label >E-Mail <span class="login-danger">*</span></label>
													<input class="form-control" type="text" placeholder="Enter Email Address"/>
												</div>
											</div>
											<div class="col-12 col-sm-4">
												<div class="form-group local-forms">
													<label >Class <span class="login-danger">*</span></label>
													<select class="form-control select">
														<option>Please Select Class  </option>
														<option>12</option>
														<option>11</option>
														<option>10</option>
													  </select>
												</div>
											</div>
										
											
											<div class="col-12 col-sm-4">
												<div class="form-group local-forms">
													<label >password </label>
													<input class="form-control" type="password" placeholder="Enter password" />
												</div>
											</div>
											<div class="col-12 col-sm-4">
												<div class="form-group students-up-files">
													<label>Upload Student Photo (150px X 150px)</label>
													<div class="uplod">
														<label class="file-upload image-upbtn mb-0">
															Choose File <input type="file"/>
														</label>
													</div>
												</div>
											</div>
											<div class="col-12">
												<div class="student-submit">
													<button type="submit" class="btn btn-primary">Submit</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>							
						</div>					
					</div>					
				</div>				
			</div>
    </div>
  )
}

export default Editstudent
