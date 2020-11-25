"use strict";

const nav = document.querySelector('.main-nav');
const button = nav.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--nojs');

button.addEventListener('click', (evt) => {
  evt.preventDefault();
  nav.classList.toggle('main-nav--open');
  nav.classList.toggle('main-nav--closed');

});
