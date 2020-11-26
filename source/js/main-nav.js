"use strict";

const nav = document.querySelector('.main-nav');
const buttonMenu = nav.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--nojs');

buttonMenu.addEventListener('click', (evt) => {
  evt.preventDefault();
  nav.classList.toggle('main-nav--open');
  nav.classList.toggle('main-nav--closed');

});
