import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SectionL() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    // e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5213/api/Auth/Login",
        { username, password }
      );
      const token = response.data.token;
      sessionStorage.setItem("token", token);
      //this.user = this.userService.getCurrentUser()
      console.log(token);
      const isAuthenticated = true; // Replace with your actual authentication logic
    
      if (isAuthenticated) {
       
        } else {
          navigate("/Dashboard");
        }
      
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
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
                    src="assets/images/register-login.png"  alt="Register Login"
                    />
                  
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="register-login-form">
                <h3 class="title">
                  Login <span>Now</span>
                </h3>
                <div class="form-wrapper">
                  <form action="#">
                    <div class="single-form">
                      <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>
                    <div class="single-form">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      
                    </div>
                    <div class="single-form">
                      <button
                        class="btn btn-primary btn-hover-dark w-100"
                        onClick={(e) => handleLogin()}
                      >
                        Login
                      </button>
                    </div>
                    <div class="form-options">
                      <span class="separator">|</span>
                      <a href="/Register" class="register">
                        <span>New user?</span>
                        <span class="active">Create an Account</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionL;
