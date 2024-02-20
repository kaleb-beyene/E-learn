import React from "react";

function Dashbords() {
  return (
    <div>
      <div class="header">
        <div class="header-left">
          <a href="/home" class="logo">
            <img src="assets/images/logo-icon.png" alt="Logo" />
          </a>
          <a href="index.html" class="logo logo-small">
            <img
              src="assets/img/logo-small.png"
              alt="Logo"
              width="30"
              height="30"
            />
          </a>
        </div>

        <div class="top-nav-search">
          <form>
            <input type="text" class="form-control" placeholder="Search here" />
            <button class="btn" type="submit">
              <i class="flaticon-magnifying-glass"></i>
            </button>
          </form>
        </div>

        
      </div>
      <div class="sidebars" id="sidebars">
        <div class="sidebar-inner slimscroll">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="menu-title">
                <span>Main Menu</span>
              </li>
              <li>
                <a href="">
                  
                  <i class="fas fa-house"></i> <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/Studentcourse">
                  <i class="fas fa-book-reader"></i> <span>My courses</span>
                </a>
              </li>
             

             
              
              <li>
                <a href="settings.html">
                  <i class="fas fa-cog"></i> <span>Settings</span>
                </a>
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
                       
                        <h3>Total courses</h3>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="card bg-comman w-100">
                  <div class="card-body">
                    <div class="db-widgets d-flex justify-content-between align-items-center">
                      <div class="db-info">
                        
                        <h3>On Going Courses</h3>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="card bg-comman w-100">
                  <div class="card-body">
                    
                      <div class="db-info">
                        
                        <h3>Completed Course</h3>
                      </div>
                      
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
                  <div id=""></div>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbords;
