import axios from "axios";
import { useEffect, useState } from "react";

function SectionList() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [students, setUsers] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:5213/api/Students");
    setUsers(result.data);
    console.log(result.data);
  }
  async function editStudent(students) {
    setFirstName(students.FirstName);
    setLastName(students.LastName);
  }
  async function DeleteStudent(id) {
    await axios.delete("" + id);
    alert("deleted Successfully");
    setFirstName("");
    setLastName("");
    Load();
  }
  async function editStudent(students) {
    await axios.edit("");
    setFirstName(students.stname);
    setLastName(students.course);
  }
  return (
    <div>
      <div class="header">
        <div class="header-left">
          <a href="/home" class="logo">
            <img src="assets/images/logo.png" alt="Logo" />
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

        <a class="mobile_btn" id="mobile_btn">
          <i class="fas fa-bars"></i>
        </a>
      </div>
      <div class="sidebars" id="sidebars">
        <div class="sidebar-inner slimscroll">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="menu-title">
                <span>Dashboard</span>
              </li>

              <li class="sub-menu">
                <a href="#">
                  <i class="fas fa-graduation-cap"></i> <span> Students</span>
                </a>
                <ul>
                  <li>
                    <a href="students.html">Student List</a>
                  </li>
                  <li>
                    <a href="student-details.html">Student View</a>
                  </li>
                  <li>
                    <a href="add-student.html">Student Add</a>
                  </li>
                  <li>
                    <a href="edit-student.html">Student Edit</a>
                  </li>
                </ul>
              </li>

              <li class="submenu">
                <a href="/List">
                  <i class="fas fa-book-reader"></i> <span>courses</span>
                </a>
                <ul>
                  <li>
                    <a href="subjects.html">Subject List</a>
                  </li>
                  <li>
                    <a href="add-subject.html">Subject Add</a>
                  </li>
                  <li>
                    <a href="edit-subject.html">Subject Edit</a>
                  </li>
                </ul>
              </li>

              <li class="menu-title">
                <span>Management</span>
              </li>
              <li class="submenu">
                <a href="#">
                  <i class="fas fa-file-invoice-dollar"></i>{" "}
                  <span> Accounts</span> <span class="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="fees-collections.html">Fees Collection</a>
                  </li>
                  <li>
                    <a href="expenses.html">Expenses</a>
                  </li>
                  <li>
                    <a href="salary.html">Salary</a>
                  </li>
                  <li>
                    <a href="add-fees-collection.html">Add Fees</a>
                  </li>
                  <li>
                    <a href="add-expenses.html">Add Expenses</a>
                  </li>
                  <li>
                    <a href="add-salary.html">Add Salary</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="settings.html">
                  <i class="fas fa-cog"></i> <span>Settings</span>
                </a>
              </li>
              <li class="menu-title">
                <span>Pages</span>
              </li>
              <li class="submenu">
                <a href="#">
                  <i class="fas fa-shield-alt"></i>{" "}
                  <span> Authentication </span> <span class="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Forgot Password</a>
                  </li>
                  <li>
                    <a href="error-404.html">Error Page</a>
                  </li>
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
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search by ID"
                  />
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search by Email"
                  />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="search-student-btn">
                  <button type="btn" class="btn btn-primaryi">
                    Search
                  </button>
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
                          <th></th>
                          <th>ID</th>
                          <th>FirstName</th>
                          <th>LastName</th>
                          <th>Email</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {students.map(function fn(student) {
                        return (
                          <tbody>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={student.data}
                                />
                              </div>
                            </td>
                            <th scope="row">{student.id} </th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.enrollmentDate}</td>
                            <td className="text-end">
                              <div className="actions">
                                <button
                                  type=""
                                  class="btn btn-sm bg-danger-light"
                                  onClick={() => editStudent(student)}
                                >
                                  <i className="fa fa-pencil-square-o"></i>
                                </button>
                                <button
                                  type=""
                                  class="btn btn-sm bg-danger-light "
                                  onClick={() => DeleteStudent(student.id)}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionList;
