import React from 'react'

function Forgotpassword() {
  return (
    <div>
    <div class="section section-padding">
        <div class="container">

            <div class="register-login-wrapper">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="register-login-images">
                            <div class="shape-1">
                                <img src="assets/images/shape/shape-26.png" alt="Shape"/>
                            </div>

                            <div class="images">
                                <img src="assets/images/register-login.png" alt="Register Login"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="register-login-form">
                            <h3 class="title">Forget <span>password</span></h3>

                            <div class="form-wrapper">
                                <form action="#">
                                    <div class="single-form">
                                        <input type="email" placeholder="Username or Email"/>
                                    </div>

                                    <div class="single-form">
                                        <button class="btn btn-primary btn-hover-dark w-100">Submit</button>
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

  )
}

export default Forgotpassword
