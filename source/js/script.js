let siteList = document.querySelector('.site-list');
let navToggle = document.querySelector('.main-nav__toggle');

siteList.classList.remove('site-list--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (siteList.classList.contains('site-list--closed')) {
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list--opened');
  } else {
    siteList.classList.add('site-list--closed');
    siteList.classList.remove('site-list--opened');
  }
});

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-nav__toggle--closed')) {
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
  }
});


let priceInput = document.querySelectorAll('.filter__range-input');

window.addEventListener("resize", function() {
  if(window.innerWidth >= 768) {
    priceInput[1].value = 900;
  } else {
    priceInput[1].value = 123;
  }
});
