import React from 'react'

function Profilesection() {
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
            
            <ul class="nav user-menu">
                <li  class="nav-item dropdown noti-dropdown language-drop me-2">
                    <a href="#" class="dropdown-toggle nav-link header-nav-list" data-bs-toggle="dropdown">
                        <img src="assets/images/icons/header-icon-01.svg" alt=""/>
                    </a>
                    <div class="dropdown-menu ">
                        <div class="noti-content">
                            <div >
                                <a class="dropdown-item" href="javascript:;"><i class="flag flag-lr me-2"></i>English</a>
                                <a class="dropdown-item" href="javascript:;"><i class="flag flag-bl me-2"></i>Francais</a>
                                <a class="dropdown-item" href="javascript:;"><i class="flag flag-cn me-2"></i>Turkce</a>
                            </div>
                        </div>
                    </div>
                </li>
               
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
               
                <li  class="nav-item zoom-screen me-2">
                    <a href="#" class="nav-link header-nav-list win-maximize">
                        <img src="assets/images/icon/header-icon-04.svg" alt=""/>
                    </a>
                </li>
                
                
                <li class="nav-item dropdown has-arrow new-user-menus">
                    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <div class="user-img">
                            <img class="rounded-circle" src="assets/images/author/author-03.jpg" width="31" alt="Ryan Taylor"/>
                            <div class="user-text">
                                <h6>Ryan Taylor</h6>
                                <p class="text-muted mb-0">Administrator</p>
                            </div>
                        </div>
                    </a>
                    <div class="dropdown-menu">
                        <div class="user-header">
                            <div class="avatar avatar-sm">
                                <img src="assets/images/author/author-03.jpg" alt="User Image" class="avatar-img rounded-circle"/>
                            </div>
                            <div class="user-text">
                                <h6>Ryan Taylor</h6>
                                <p class="text-muted mb-0">Administrator</p>
                            </div>
                        </div>
                        <a class="dropdown-item" href="/">My Profile</a>
                        <a class="dropdown-item" href="inbox.html">Inbox</a>
                        <a class="dropdown-item" href="/login">Logout</a>
                    </div>
                </li>
               
                
            </ul>
            
            
        </div>
        
      <div class="page-wrapper">
                <div class="content container-fluid">
					
					
					<div class="page-header">
						<div class="row">
							<div class="col">
								<h3 class="page-title">Profile</h3>
								
							</div>
						</div>
					</div>
					
					
					<div class="row">
						<div class="col-md-12">
							<div class="profile-header">
								<div class="row align-items-center">
									<div class="col-auto profile-image">
										<a href="#">
											<img class="rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg"/>
										</a>
									</div>
									<div class="col ms-md-n2 profile-user-info">
										<h4 class="user-name mb-0">John Doe</h4>
										<h6 class="text-muted">UI/UX Design Team</h6>
										<div class="user-Location"><i class="fas fa-map-marker-alt"></i> Florida, United States</div>
										<div class="about-text">Lorem ipsum dolor sit amet.</div>
									</div>
									<div class="col-auto profile-btn">
										<a href="#" class="btn btn-primary">
											Edit
										</a>
									</div>
								</div>
							</div>
							<div class="profile-menu">
								<ul class="nav nav-tabs nav-tabs-solid">
									<li class="nav-item">
										<a class="nav-link active" data-bs-toggle="tab" href="#per_details_tab">About</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" data-bs-toggle="tab" href="#password_tab">Password</a>
									</li>
								</ul>
							</div>	
							<div class="tab-content profile-tab-cont">
								
								
								<div class="tab-pane fade show active" id="per_details_tab">
								
									
									<div class="row">
										<div class="col-lg-9">
											<div class="card">
												<div class="card-body">
													<h5 class="card-title d-flex justify-content-between">
														<span>Personal Details</span> 
														<a class="edit-link" data-bs-toggle="modal" href="#edit_personal_details"><i class="far fa-edit me-1"></i>Edit</a>
													</h5>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Name</p>
														<p class="col-sm-9">John Doe</p>
													</div>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth</p>
														<p class="col-sm-9">24 Jul 1983</p>
													</div>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Email ID</p>
						
													</div>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Mobile</p>
														<p class="col-sm-9">305-310-5857</p>
													</div>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-end mb-0">Address</p>
														<p class="col-sm-9 mb-0">4663  Agriculture Lane,
														Miami,
														Florida - 33165,
														United States. </p>
													</div>
												</div>
											</div>
											
										</div>

										<div class="col-lg-3">
											
											
											<div class="card">
												<div class="card-body">
													<h5 class="card-title d-flex justify-content-between">
														<span>Account Status</span>
														<a class="edit-link" href="#"><i class="far fa-edit me-1"></i> Edit</a>
													</h5>
													<button class="btn btn-success" type="button"><i class="fe fe-check-verified"></i> Active</button>
												</div>
											</div>
		
											<div class="card">
												<div class="card-body">
													<h5 class="card-title d-flex justify-content-between">
														<span>Skills </span> 
														<a class="edit-link" href="#"><i class="far fa-edit me-1"></i> Edit</a>
													</h5>
													<div class="skill-tags">
														<span>Html5</span>
														<span>CSS3</span>
														<span>WordPress</span>
														<span>Javascript</span>
														<span>Android</span>
														<span>iOS</span>
														<span>Angular</span>
														<span>PHP</span>
													</div>
												</div>
											</div>
											

										</div>
									</div>
								

								</div>
								
								<div id="password_tab" class="tab-pane fade">
								
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Change Password</h5>
											<div class="row">
												<div class="col-md-10 col-lg-6">
													<form>
														<div class="form-group">
															<label>Old Password</label>
															<input type="password" class="form-control"/>
														</div>
														<div class="form-group">
															<label>New Password</label>
															<input type="password" class="form-control"/>
														</div>
														<div class="form-group">
															<label>Confirm Password</label>
															<input type="password" class="form-control"/>
														</div>
														<button class="btn btn-primary" type="submit">Save Changes</button>
													</form>
												</div>
											</div>
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

export default Profilesection
