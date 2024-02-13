import React from 'react'

function Contactsection() {
  return (
    <div>
       <div class="section page-banner">

<img class="shape-1 animation-round" src="assets/images/shape/shape-8.png" alt="Shape"/>

<img class="shape-2" src="assets/images/shape/shape-23.png" alt="Shape"/>

<div class="container">
  
    <div class="page-banner-content">
        <ul class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li class="active">Contact Us</li>
        </ul>
        <h2 class="title">Contact <span>Us</span></h2>
    </div>
    
</div>

<div class="shape-icon-box">

    <img class="icon-shape-1 animation-left" src="assets/images/shape/shape-5.png" alt="Shape"/>

    <div class="box-content">
        <div class="box-wrapper">
            <i class="flaticon-badge"></i>
        </div>
    </div>

    <img class="icon-shape-2" src="assets/images/shape/shape-6.png" alt="Shape"/>

</div>


<img class="shape-3" src="assets/images/shape/shape-24.png" alt="Shape"/>

<img class="shape-author" src="assets/images/author/author-11.jpg" alt="Shape"/>

</div>
<div class="section section-padding-02">
            <div class="container">

               
                <div class="contact-map-wrapper">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                </div>
                

            </div>
        </div>
        <div class="section section-padding">
            <div class="container">

                <div class="contact-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-6">

                            <div class="contact-info">

                                <img class="shape animation-round" src="assets/images/shape/shape-12.png" alt="Shape"/>

                               
                                <div class="single-contact-info">
                                    <div class="info-icon">
                                        <i class="flaticon-phone-call"></i>
                                    </div>
                                    <div class="info-content">
                                        <h6 class="title">Phone No.</h6>
                                        <p><a href="tel:88193326867">(88) 193 326 867</a></p>
                                    </div>
                                </div>
                                
                                <div class="single-contact-info">
                                    <div class="info-icon">
                                        <i class="flaticon-email"></i>
                                    </div>
                                    <div class="info-content">
                                        <h6 class="title">Email Address.</h6>
                                        <p><a href="mailto:edule100@gmail.com">edule100@gmail.com</a></p>
                                    </div>
                                </div>
                               
                                <div class="single-contact-info">
                                    <div class="info-icon">
                                        <i class="flaticon-pin"></i>
                                    </div>
                                    <div class="info-content">
                                        <h6 class="title">Office Address.</h6>
                                        <p>Talga, Alabama, USA</p>
                                    </div>
                                </div>
                                
                            </div>
                           

                        </div>
                        <div class="col-lg-6">

                            <div class="contact-form">
                                <h3 class="title">Get in Touch <span>With Us</span></h3>

                                <div class="form-wrapper">
                                    <form id="contact-form" action="https://htmlmail.hasthemes.com/humayun/edule-contact.php" method="POST">
                                      
                                        <div class="single-form">
                                            <input type="text" name="name" placeholder="Name"/>
                                        </div>
                                       
                                        <div class="single-form">
                                            <input type="email" name="email" placeholder="Email"/>
                                        </div>
                                        
                                        <div class="single-form">
                                            <input type="text" name="subject" placeholder="Subject"/>
                                        </div>
                                        
                                        <div class="single-form">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        
                                        <p class="form-message"></p>
                                       
                                        <div class="single-form">
                                            <button class="btn btn-primary btn-hover-dark w-100">Send Message <i class="flaticon-right"></i></button>
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

export default Contactsection
