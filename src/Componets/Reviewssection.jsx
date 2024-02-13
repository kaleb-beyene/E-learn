import React from 'react'
import  { useState } from "react";

function Reviewssecton() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const allSildeMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

  allSildeMenu.forEach(item=>{
      const li = item.parentElement;
  
      item.addEventListener('click', function () {
          allSildeMenu.forEach(i=> {
              i.parentElement.classList.remove('active');
          })
          li.classList.add('active');
      })
  });
  return (
    <div>
      <section id="sidebar"  className={isActive ? 'hide': null} >
        <a href="#" class="brand">
          <i class='bx bxs-smile'></i>
          <span class="text">AdminHub</span>
        </a>
        <ul class="side-menu top">
          <li class="active">
            <a href="#">
              <i class='bx bxs-dashboard' ></i>
              <span class="text">Dashboard</span>
            </a>
          </li>
          <li>
          <a href="#" >
              <i className='bx bxs-shopping-bag-alt'></i>
              <span className="text">My courses</span>
            </a>
          </li>
          <li>
            
            <a href="Analytics">
              <i class='bx bxs-doughnut-chart' ></i>
              <span class="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-message-dots' ></i>
              <span class="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-group' ></i>
              <span class="text">Team</span>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="#">
              <i class='bx bxs-cog' ></i>
              <span class="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" class="logout">
              <i class='bx bxs-log-out-circle' ></i>
              <span class="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
     
      <section id="content">
       
        <nav>
          <i  class='bx bx-menu'  onClick={toggleClass}  ></i>
          <a href="#" class="nav-link">Categories</a>
          <form action="#">
            <div class="form-input">
              <input type="search" placeholder="Search..." />
              <button type="button" class="search-btn"><i class='bx bx-search' ></i></button>
            </div>
          </form>
          <a href="#" class="notification">
            <i class='bx bxs-bell' ></i>
            <span class="num">8</span>
          </a>
          <a href="#" class="profile">
            <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
          </a>
        </nav>
      
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Dashboard</h1>
              <ul class="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i class='bx bx-chevron-right' ></i></li>
                <li>
                  <a class="active" href="#">Home</a>
                </li>
              </ul>
            </div>
            
          </div>
          <ul class="box-info">
            <li>
              <i class='bx bxs-calendar-check' ></i>
              <span class="text">
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <i class='bx bxs-group' ></i>
              <span class="text">
                <h3>2834</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <i class='bx bxs-dollar-circle' ></i>
              <span class="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>
          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Recent Orders</h3>
                <i class='bx bx-search' ></i>
                <i class='bx bx-filter' ></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2023</td>
                    <td><span class="status completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2023</td>
                    <td><span class="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2023</td>
                    <td><span class="status process">Process</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2023</td>
                    <td><span class="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2023</td>
                    <td><span class="status completed">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="todo">
              <div class="head">
                <h3>Todos</h3>
                <i class='bx bx-plus' ></i>
                <i class='bx bx-filter' ></i>
              </div>
              <ul class="todo-list">
                <li class="completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li class="completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li class="not-completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li class="completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li class="not-completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded' ></i>
                </li>
              </ul>
            </div>
          </div>
        </main>
       
      </section>
    </div>
  )
}

export default Reviewssecton
