import React from 'react'

function Sectionh2() {
   
  return (
    <div>
      <div class="section section-padding-02">
            <div class="container">               
                <div class="courses-top">
                    <div class="section-title shape-01">
                        <h2 class="main-title">All <span>Courses</span> of Edule</h2>
                    </div>
                    <div class="courses-search">
                        <form action="#">
                            <input type="text" placeholder="Search your course"/>
                            <button>
                              <i class="flaticon-magnifying-glass"></i></button>                                                                   
                        </form>
                    </div>
                </div>
                <div class="courses-tabs-menu courses-active">
                    <div class="swiper-container">
                        <ul class="swiper-wrapper nav">
                            <li class="swiper"><button class="active" data-bs-toggle="tab" data-bs-target="#tabs1">UI/UX Design</button></li>
                            <li class="swiper"><button data-bs-toggle="tab" data-bs-target="#tabs2">Development</button></li>
                            <li class="swiper"><button data-bs-toggle="tab" data-bs-target="#tabs3">Data Science</button></li>
                            <li class="swiper"><button data-bs-toggle="tab" data-bs-target="#tabs4">Business</button></li>
                            <li class="swiper"><button data-bs-toggle="tab" data-bs-target="#tabs5">Financial</button></li>
                            <li class="swiper"><button data-bs-toggle="tab" data-bs-target="#tabs6">Marketing</button></li>
                            <li class="swiper"><button data-bs-toggle="tab" data-bs-target="#tabs7">Design</button></li>
                        </ul>
                    </div>
                    <div class="swiper-button-next"><i class="icofont-rounded-right"></i></div>
                    <div class="swiper-button-prev"><i class="icofont-rounded-left"></i></div>
                </div>
                <div class="tab-content courses-tab-content">
                    <div class="tab-pane fade show active" id="tabs1">
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-08.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="=width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-09.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-02.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Pamela Foster</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-03.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-03.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Rose Simmons</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs2">

                        
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-02.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-05.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-02.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Pamela Foster</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="col-lg-4 col-md-6">
                               
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-01.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-03.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Rose Simmons</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-04.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-04.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Finance</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-06.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-05.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Marketing</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-03.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-06.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Design</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                       

                    </div>
                    <div class="tab-pane fade" id="tabs3">

                        
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                 
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-05.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-06.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-02.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Pamela Foster</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-03.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-03.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Rose Simmons</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-01.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-04.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Finance</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-02.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-05.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Marketing</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-04.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-06.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Design</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                

                    </div>
                    <div class="tab-pane fade" id="tabs4">

                        
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-06.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              
                                </div>
                                <div class="col-lg-4 col-md-6">
                               
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-05.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-02.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Pamela Foster</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-04.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-03.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Rose Simmons</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" Style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-03.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-04.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Finance</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-02.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-05.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Marketing</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-01.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-06.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Design</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div class="tab-pane fade" id="tabs5">

                        
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                 
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-03.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-02.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-02.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Pamela Foster</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-01.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-03.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Rose Simmons</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-06.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-04.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Finance</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-05.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-05.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Marketing</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                               
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-04.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-06.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Design</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                       

                    </div>
                    <div class="tab-pane fade" id="tabs6">

                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-03.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="col-lg-4 col-md-6">
                                 
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-05.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-02.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Pamela Foster</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-01.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-03.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Rose Simmons</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-04.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-04.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Finance</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                  
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-06.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-05.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Marketing</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-02.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-06.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Design</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                       

                    </div>
                    <div class="tab-pane fade" id="tabs7">

                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-04.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-02.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-02.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Pamela Foster</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-md-6">
                                  
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-06.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-03.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Rose Simmons</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-05.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-04.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Finance</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="col-lg-4 col-md-6">
                                   
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-01.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-05.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Marketing</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="/courses-details"><img src="assets/images/courses/courses-03.jpg" alt="Courses"/></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-06.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Design</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="/courses-details">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" styleobject="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
           

                
                <div class="courses-btn text-center">
                    <a href="/courses" class="btn btn-secondary btn-hover-primary">Other Course</a>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Sectionh2
