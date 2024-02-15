import React from 'react'

function SectionList() {
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
							
							<li class="sub-menu">
								<a href="#"><i class="fas fa-graduation-cap"></i> <span> Students</span> </a>
								<ul>
									<li><a href="students.html">Student List</a></li>
									<li><a href="student-details.html">Student View</a></li>
									<li><a href="add-student.html">Student Add</a></li>
									<li><a href="edit-student.html">Student Edit</a></li>
								</ul>
							</li>
							
							<li class="submenu">
							<a href="/List"><i class="fas fa-book-reader"></i> <span>courses</span></a>
								<ul>
									<li><a href="subjects.html">Subject List</a></li>
									<li><a href="add-subject.html">Subject Add</a></li>
									<li><a href="edit-subject.html">Subject Edit</a></li>
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
							
							<li> 
								<a href="settings.html"><i class="fas fa-cog"></i> <span>Settings</span></a>
							</li>
							<li class="menu-title"> 
								<span>Pages</span>
							</li>
							<li class="submenu">
								<a href="#"><i class="fas fa-shield-alt"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
								<ul>
									<li><a href="login.html">Login</a></li>
									<li><a href="register.html">Register</a></li>
									<li><a href="forgot-password.html">Forgot Password</a></li>
									<li><a href="error-404.html">Error Page</a></li>
								</ul>
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
									<h3 class="page-title">Students</h3>
									
								</div>
							</div>
						</div>
					</div>
					<div class="student-group-form">
						<div class="row">
							<div class="col-lg-3 col-md-6">  
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Search by ID ..."/>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">  
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Search byUserName ..."/>
								</div>
							</div>
							<div class="col-lg-4 col-md-6">  
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Search by Email ..."/>
								</div>
							</div>
							<div class="col-lg-2">  
								<div class="search-student-btn">
									<button type="btn" class="btn btn-primaryi">Search</button>
								</div>
							</div>
						</div>
					</div>
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table comman-shadow">
								<div class="card-body">
							
									<div class="page-header">
										<div class="row align-items-center">
											<div class="col">
												<h3 class="page-title">Students</h3>
											</div>
											
										</div>
									</div>
									
									<div class="table-responsive">
										<table class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
											<thead class="student-thread">
												<tr>
													<th>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</th>
													<th>ID</th>
													<th>username</th>
													<th>Email</th>
													<th>Course</th>
													
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td></td>
													
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-01.jpg" alt="User Image"/></a>
															<a href="student-details.html">Aaliyah</a>
														</h2>
													</td>
													<th>Email</th>
													<th>Course</th>
													<td class="text-end">
														<div class="actions ">
															<a href="/Edit" class="btn btn-sm bg-danger-light">
																<i class="fa fa-pencil-square-o"></i>
															</a>
															<a href="/Delete" class="btn btn-sm bg-danger-light">
																<i class="fa fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												
											</tbody>
										</table>
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

export default SectionList
