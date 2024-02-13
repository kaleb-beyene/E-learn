/* eslint-disable no-undef */
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import $ from 'jquery';
import  { useState } from 'react';
(function ($) {
  "useState";
  var $wrapper = $('.main-wrapper');
	var $pageWrapper = $('.page-wrapper');
  /*--
    Header Sticky
  -----------------------------------*/
  $(window).on('scroll', function(event) {
    var scroll = $(window).scrollTop();
    if (scroll <= 100) {
      $(".header-main").removeClass("sticky");
    } else {
      $(".header-main").addClass("sticky");
    }
  });
  
  const listItems = document.querySelectorAll(".submenu ul");
  
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      let isActive = item.classList.contains("active");
      listItems.forEach((el) => {
        el.classList.remove("active");
      });
      if (isActive) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });

  
  $('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function() {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});
  
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function() {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});
	
	// toggle-password
	
	if($('.toggle-password').length > 0) {
		$(document).on('click', '.toggle-password', function() {
			$(this).toggleClass("feather-eye feather-eye-off");
			var input = $(".pass-input");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	if($('.reg-toggle-password').length > 0) {
		$(document).on('click', '.reg-toggle-password', function() {
			$(this).toggleClass("feather-eye feather-eye-off");
			var input = $(".pass-confirm");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	
	// Sidebar overlay
	
	$(".sidebar-overlay").on("click", function () {
		$wrapper.removeClass('slide-nav');
		$(".sidebar-overlay").removeClass("opened");
		$('html').removeClass('menu-opened');
	});
	
	// Logo Hide Btn

	$(document).on("click",".logo-hide-btn",function () {
		$(this).parent().hide();
	});
	
	// Page Content Height
	
	if($('.page-wrapper').length > 0 ){
		var height = $(window).height();	
		$(".page-wrapper").css("min-height", height);
	}
	
	// Page Content Height Resize
	
	$(window).resize(function(){
		if($('.page-wrapper').length > 0 ){
			var height = $(window).height();
			$(".page-wrapper").css("min-height", height);
		}
	});
	
	// Select 2
	
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
  /*--
    Menu Active
  -----------------------------------*/
  $(function () {
    var url = window.location.pathname;
    var activePage = url.substring(url.lastIndexOf('/') + 1);
    $('.nav-menu li a').each(function () {
      var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1);

      if (activePage == linkPage) {
        $(this).closest("li").addClass("active");
      }
    });
  });

  /*--
    Menu Script
  -----------------------------------*/

  function menuScript() {

    $('.menu-toggle').on('click', function () {
      $('.mobile-menu').addClass('open')
      $('.overlay').addClass('open')
    });

    $('.menu-close').on('click', function () {
      $('.mobile-menu').removeClass('open')
      $('.overlay').removeClass('open')
    });

    $('.overlay').on('click', function () {
      $('.mobile-menu').removeClass('open')
      $('.overlay').removeClass('open')
    });

    /*Variables*/
    var $offCanvasNav = $('.mobile-menu-items'),
      $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function (e) {
      var $this = $(this);
      if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length) {
          $this.parent('li').removeClass('active-expand');
          $this.siblings('ul').slideUp();
        } else {
          $this.parent('li').addClass('active-expand');
          $this.closest('li').siblings('li').find('ul:visible').slideUp();
          $this.closest('li').siblings('li').removeClass('active-expand');
          $this.siblings('ul').slideDown();
        }
      }
    });

    $(".sub-menu").parent("li").addClass("menu-item-has-children");
  }
  menuScript();

  /*--
    Magnific Popup Activation
  -----------------------------------*/
  $('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
  });

  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Get menu arrow element
    var menuArrow = document.querySelector('#sidebar-link .menu-arrow');

    // Get submenu element
    var submenu = document.getElementById('submenu');

    // Add click event listener to the menu arrow
    menuArrow.addEventListener('click', function () {
        // Toggle the 'active' class on the submenu
        submenu.classList.toggle('active');
    });
});
// Sidebar overlay
	
$(".sidebar-overlay").on("click", function () {
  $wrapper.removeClass('slide-nav');
  $(".sidebar-overlay").removeClass("opened");
  $('html').removeClass('menu-opened');
});

// Logo Hide Btn

$('body').append('<div class="sidebar-overlay"></div>');
$(document).on('click', '#mobile_btn', function() {
  $wrapper.toggleClass('slide-nav');
  $('.sidebar-overlay').toggleClass('opened');
  $('html').addClass('menu-opened');
  return false;
});

// toggle-password

if($('.toggle-password').length > 0) {
  $(document).on('click', '.toggle-password', function() {
    $(this).toggleClass("feather-eye feather-eye-off");
    var input = $(".pass-input");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
}
if($('.reg-toggle-password').length > 0) {
  $(document).on('click', '.reg-toggle-password', function() {
    $(this).toggleClass("feather-eye feather-eye-off");
    var input = $(".pass-confirm");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
}

// Sidebar overlay

$(".sidebar-overlay").on("click", function () {
  $wrapper.removeClass('slide-nav');
  $(".sidebar-overlay").removeClass("opened");
  $('html').removeClass('menu-opened');
});

// Logo Hide Btn

$(document).on("click",".logo-hide-btn",function () {
  $(this).parent().hide();
});
	
	// Select 2
	
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
  $(document).ready(function() {
    // Add click event listener to the menu arrow
    $('.menu-arrow').click(function(e) {
        e.preventDefault();
        
        // Toggle the visibility of the submenu
        $(this).parent().siblings('ul').toggle();
    });
});
	
  /*--
    Courses Tabs Menu
  -----------------------------------*/
  var coursesSwiper = new Swiper('.courses-active .swiper-container', {
    speed: 600,
    spaceBetween: 30,
    navigation: {
      nextEl: '.courses-active .swiper-button-next',
      prevEl: '.courses-active .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      }
    },
  });
  // Add event listener for navigation buttons
  $('.swiper-wrapper.nav button').on('click', function () {
    var targetId = $(this).data('bs-target');
    coursesSwiper.slideTo($('#' + targetId).index());
  });
  

  /*--
    Testimonial
  -----------------------------------*/
  var swiper = new Swiper('.testimonial-active .swiper-container', {
    slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });
  /*--
    Brand
  -----------------------------------*/
  var brandSwiper = new Swiper('.brand-active .swiper-container', {
    speed: 600,
    spaceBetween: 30,
    navigation: {
      nextEl: '.brand-active .swiper-button-next',
      prevEl: '.brand-active .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,

      },
      1200: {
        slidesPerView: 6,
      }
    },

  });
  // eslint-disable-next-line no-undef
  if($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#ccc',
			allowPageScroll: false,
			wheelStep: 10,
			touchScrollStep: 100
		});
		var wHeight = $(window).height() - 60;
		$slimScrolls.height(wHeight);
		$('.sidebar .slimScrollDiv').height(wHeight);
		$(window).resize(function() {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$('.sidebar .slimScrollDiv').height(rHeight);
		});
	}
  /*--
    Reviews
  -----------------------------------*/
  var reviewsSwiper = new Swiper('.reviews-active .swiper-container', {
    speed: 600,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews-active .swiper-button-next',
      prevEl: '.reviews-active .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      }
    },
  });
 

  /*--
    Students
  -----------------------------------*/
  var studentsSwiper = new Swiper('.students-active .swiper-container', {
    speed: 600,
    spaceBetween: 30,
    navigation: {
      nextEl: '.students-active .swiper-button-next',
      prevEl: '.students-active .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      }
    },
  });

})($);