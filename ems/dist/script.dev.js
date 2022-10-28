"use strict";

var navbar = document.querySelector('.header .navbar');
var searchForm = document.querySelector('.header .search-form');
var loginForm = document.querySelector('.header .login-form');
var contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = function () {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = function () {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = function () {
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = function () {
  contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = function () {
  contactInfo.classList.remove('active');
};

window.onscroll = function () {
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  contactInfo.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
});
var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
});
var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1000: {
      slidesPerView: 5
    }
  }
});
//# sourceMappingURL=script.dev.js.map
