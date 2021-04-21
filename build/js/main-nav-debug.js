var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const form = document.querySelector('.js-form');

console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });