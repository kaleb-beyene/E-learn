import React from "react";

function Adashboard() {
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
                <span>Dashboard</span>
              </li>

              <li class="submenu">
                <a href="/List">
                  <i class="fas fa-graduation-cap"></i> <span> Students</span>
                </a>
              </li>

              <li class="submenu">
                <a href="/studentcourse">
                  <i class="fas fa-book-reader"></i> <span>courses</span>
                </a>
              </li>

              <li>
                <a href="">
                  <i class="fas fa-cog"></i> <span>Settings</span>
                </a>
              </li>
              <li class="menu-title">
                <span>Authentication</span>
              </li>

              <li>
                <a href="/">
                  <i class="fas fa-logout"></i>
                  <span>Login</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fas fa-logout"></i>
                  <span>logout</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fas fa-logout"></i>
                  <span>Registration</span>
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
                  <h3 class="page-title">Welcome Admin!</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-sm-6 col-12 d-flex">
              <div class="card bg-comman w-100">
                <div class="card-body">
                  <div class="db-widgets d-flex justify-content-between align-items-center">
                    <div class="db-info">
                      <h6>Students</h6>
                      <h3>15</h3>
                    </div>
                    <div class="db-icon">
                      <img
                        src="assets/images/icon/dash-icon-01.svg"
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12 d-flex">
              <div class="card bg-comman w-100">
                <div class="card-body">
                  <div class="db-widgets d-flex justify-content-between align-items-center">
                    <div class="db-info">
                      <h6>Awards</h6>
                      <h3>50</h3>
                    </div>
                    <div class="db-icon">
                      <img
                        src="assets/images/icon/dash-icon-02.svg"
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12 d-flex">
              <div class="card bg-comman w-100">
                <div class="card-body">
                  <div class="db-widgets d-flex justify-content-between align-items-center">
                    <div class="db-info">
                      <h6>Courses</h6>
                      <h3>10</h3>
                    </div>
                    <div class="db-icon">
                      <img
                        src="assets/images/icon/dash-icon-03.svg"
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="card card-chart">
                <div class="card-header">
                  <div class="row align-items-center">
                    <div class="col-6">
                      <h5 class="card-title">Overview</h5>
                    </div>
                    <div class="col-6">
                      <ul class="chart-list-out">
                        <li>
                          <span class="circle-blue"></span>Courses
                        </li>
                        <li>
                          <span class="circle-green"></span>Student
                        </li>
                        <li class="star-menus">
                          <a href="javascript:;">
                            <i class="fas fa-ellipsis-v"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div id="apexcharts-area"></div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="card card-chart">
                <div class="card-header">
                  <div class="row align-items-center">
                    <div class="col-6">
                      <h5 class="card-title">Number of Students</h5>
                    </div>
                    <div class="col-6">
                      <ul class="chart-list-out">
                        <li>
                          <span class="circle-blue"></span>Girls
                        </li>
                        <li>
                          <span class="circle-green"></span>Boys
                        </li>
                        <li class="star-menus">
                          <a href="javascript:;">
                            <i class="fas fa-ellipsis-v"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div id="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adashboard;
