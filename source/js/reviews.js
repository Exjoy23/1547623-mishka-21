'use strict';

const reviews = document.querySelector('.reviews');
const items = reviews.querySelectorAll('.reviews__item');
const togglePrev = reviews.querySelector('.reviews__toggle--previous');
const toggleNext = reviews.querySelector('.reviews__toggle--next');

let counter = 0;

toggleNext.addEventListener('click', (evt) => {
  evt.preventDefault();
    counter++;

    if (counter === items.length) {
      counter = 0;
    }

  items.forEach(item => {
    item.classList.remove('reviews__item--active');
  });
  items[counter].classList.add('reviews__item--active');

  if (counter === items.length) {
    counter = 0;
  }
});

togglePrev.addEventListener('click', (evt) => {
  evt.preventDefault();
    counter--;

    if (counter < 0) {
      counter = items.length - 1;
    }

  items.forEach(item => {
    item.classList.remove('reviews__item--active');
  });
  items[counter].classList.add('reviews__item--active');

  if (counter < 0) {
    counter = items.length - 1;
  }
});
