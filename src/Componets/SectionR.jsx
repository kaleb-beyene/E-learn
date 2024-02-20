import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SectionR() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleFirstNamechange = (value) => {
    setFirstName(value);
  };
  const handleLastNamechange = (value) => {
    setLastName(value);
  };
  const handleUsernamechange = (value) => {
    setUsername(value);
  };
  const handleEmailchange = (value) => {
    setEmail(value);
  };
  const handlePasswordchange = (value) => {
    setPassword(value);
  };

  const handlesubmit = () => {
    const data = {
      FirstName: FirstName,
      LastName: LastName,
      username: username,
      email: email,
      password: password,
      roles: ["student"],
    };
    const url = "http://localhost:5213/api/Auth/Register";
    axios
      .post(url, data)
      .then((response) => {
        alert("Registered Successfully!");
        navigate("/Dashboard");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <div class="section section-padding">
        <div class="container">
          <div class="register-login-wrapper">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="register-login-images">
                  <div class="shape-1">
                    <img src="assets/images/shape/shape-26.png" alt="Shape" />
                  </div>
                  <div class="images">
                    <img
                      src="assets/images/register-login.png"
                      alt="Register Login"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="register-login-form">
                  <h3 class="title">
                    Registration <span>Now</span>
                  </h3>
                  <div class="form-wrapper">
                    <form action="#">
                      <div class="single-form">
                        <input
                          type="text"
                          placeholder="Fristname"
                          onChange={(e) =>
                            handleFirstNamechange(e.target.value)
                          }
                        />
                      </div>
                      <div class="single-form">
                        <input
                          type="text"
                          placeholder="lastname"
                          onChange={(e) => handleLastNamechange(e.target.value)}
                        />
                      </div>
                      <div class="single-form">
                        <input
                          type="text"
                          placeholder="username"
                          onChange={(e) => handleUsernamechange(e.target.value)}
                        />
                      </div>
                      <div class="single-form">
                        <input
                          type="email"
                          placeholder="Email"
                          onChange={(e) => handleEmailchange(e.target.value)}
                        />
                      </div>
                      <div class="single-form">
                        <input
                          type="password"
                          placeholder="password"
                          onChange={(e) => handlePasswordchange(e.target.value)}
                        />
                      </div>

                      <div class="single-form">
                        <button
                          class="btn btn-primary btn-hover-dark w-100"
                          onClick={(e) => handlesubmit()}
                        >
                          Create an account
                        </button>
                      </div>
                      <div class="row">
                        <div class="col-xl-3  col-sm-6 col-12">
                          <div class="social-boxs">
                            <img
                              src="assets/images/icon/social-icon-01.svg"
                              alt="Social Icon"
                            />
                          </div>
                        </div>
                        <div class="col-xl-3  col-sm-6 col-12">
                          <div class="social-boxs">
                            <img
                              src="assets/images/icon/social-icon-02.svg"
                              alt="Social Icon"
                            />
                          </div>
                        </div>
                        <div class="col-xl-3  col-sm-6 col-12">
                          <div class="social-boxs">
                            <img
                              src="assets/images/icon/social-icon-03.svg"
                              alt="Social Icon"
                            />
                          </div>
                        </div>
                        <div class="col-xl-3  col-sm-6 col-12">
                          <div class="social-boxs">
                            <img
                              src="assets/images/icon/social-icon-04.svg"
                              alt="Social Icon"
                            />
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
    </div>
  );
}

export default SectionR;
