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
								<a href="#"><i class="fas fa-book-reader"></i> <span>courses</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><a href="subjects.html">Subject List</a></li>
									<li><a href="add-subject.html">Subject Add</a></li>
									<li><a href="edit-subject.html">Subject Edit</a></li>
								</ul>
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
									<ul class="breadcrumb">
										<li class="breadcrumb-item"><a href="students.html">Student</a></li>
										<li class="breadcrumb-item active">All Students</li>
									</ul>
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
									<input type="text" class="form-control" placeholder="Search by Name ..."/>
								</div>
							</div>
							<div class="col-lg-4 col-md-6">  
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Search by Phone ..."/>
								</div>
							</div>
							<div class="col-lg-2">  
								<div class="search-student-btn">
									<button type="btn" class="btn btn-primary">Search</button>
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
											<div class="col-auto text-end float-end ms-auto download-grp">
												<a href="students.html" class="btn btn-outline-gray me-2 active"><i class="feather-list"></i></a>
												<a href="students-grid.html" class="btn btn-outline-gray me-2"><i class="feather-grid"></i></a>
												<a href="#" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i> Download</a>
												<a href="add-student.html" class="btn btn-primary"><i class="fas fa-plus"></i></a>
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
													<th>Name</th>
													<th>Class</th>
													<th>DOB</th>
													<th>Parent Name</th>
													<th>Mobile Number</th>
													<th>Address</th>
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
													<td>PRE2209</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-01.jpg" alt="User Image"/></a>
															<a href="student-details.html">Aaliyah</a>
														</h2>
													</td>
													<td>10 A</td>
													<td>2 Feb 2002</td>
													<td>Jeffrey Wong</td>
													<td>097 3584 5870</td>
													<td>911 Deer Ridge Drive,USA</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE2213</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt="User Image"/></a>
															<a href="student-details.html">Malynne</a>
														</h2>
													</td>
													<td>8 A</td>
													<td>3 June 2010</td>
													<td>Fields Malynne</td>
													<td>242 362 3100</td>
													<td>Bacardi Rd P.O. Box N-4880, New Providence</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE2143</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-02.jpg" alt="User Image"/></a>
															<a href="student-details.html">Levell Scott</a>
														</h2>
													</td>
													<td>10 A</td>
													<td>12 Apr 2002</td>
													<td>Jeffrey Scott</td>
													<td>026 7318 4366</td>
													<td>P.O. Box: 41, Gaborone</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE2431</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt="User Image"/></a>
															<a href="student-details.html">Minnie</a>
														</h2>
													</td>
													<td>11 C</td>
													<td>24 Feb 2000</td>
													<td>J Shaffer</td>
													<td>952 512 4909</td>
													<td>4771  Oral Lake Road, Golden Valley</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE1534</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-04.jpg" alt="User Image"/></a>
															<a href="student-details.html">Lois A</a>
														</h2>
													</td>
													<td>10 A</td>
													<td>22 Jul 2006</td>
													<td>Cleary Wong</td>
													<td>413 289 1314</td>
													<td>2844 Leverton Cove Road, Palmer</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE2153</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-05.jpg" alt="User Image"/></a>
															<a href="student-details.html">Calvin</a>
														</h2>
													</td>
													<td>9 B</td>
													<td>8 Dec 2003</td>
													<td>Minnie J Shaffer</td>
													<td>701 753 3810</td>
													<td>1900  Hidden Meadow Drive, Crete</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE1252</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-06.jpg" alt="User Image"/></a>
															<a href="student-details.html">Joe Kelley</a>
														</h2>
													</td>
													<td>11 C</td>
													<td>7 Oct 2000</td>
													<td>Vincent Howard</td>
													<td>402 221 7523</td>
													<td>3979  Ashwood Drive, Omaha</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE1434</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-07.jpg" alt="User Image"/></a>
															<a href="student-details.html">Vincent</a>
														</h2>
													</td>
													<td>10 A</td>
													<td>4 Jan 2002</td>
													<td>Kelley Joe</td>
													<td>402 221 7523</td>
													<td>3979  Ashwood Drive, Omaha</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE2345</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-08.jpg" alt="User Image"/></a>
															<a href="student-details.html">Kozma  Tatari</a>
														</h2>
													</td>
													<td>9 A</td>
													<td>1 Feb 2006</td>
													<td>Lombardi</td>
													<td>04 2239 968</td>
													<td>Rruga E Kavajes, Condor Center, Tirana</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE2365</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-09.jpg" alt="User Image"/></a>
															<a href="student-details.html">John Chambers</a>
														</h2>
													</td>
													<td>11 B</td>
													<td>13 Sept 2003</td>
													<td>Wong Jeffrey</td>
													<td>870 663 2334</td>
													<td>4667 Sunset Drive, Pine Bluff</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="form-check check-tables">
															<input class="form-check-input" type="checkbox"  value="something"/>
														</div>
													</td>
													<td>PRE1234</td>
													<td>
														<h2 class="table-avatar">
															<a href="student-details.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-10.jpg" alt="User Image"/></a>
															<a href="student-details.html">Nathan Humphries</a>
														</h2>
													</td>
													<td>10 B</td>
													<td>26 Apr 1994</td>
													<td>Stephen Marley</td>
													<td>077 3499 9959</td>
													<td>86 Lamphey Road, Thelnetham</td>
													<td class="text-end">
														<div class="actions ">
															<a href="javascript:;" class="btn btn-sm bg-success-light me-2 ">
																<i class="feather-eye"></i>
															</a>
															<a href="edit-student.html" class="btn btn-sm bg-danger-light">
																<i class="feather-edit"></i>
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

				
				<footer>
					<p>COPYRIGHT © 2023 DREAMSTECHNOLOGIES.</p>					
				</footer>
								
			</div>
    </div>
  )
}

export default SectionList
