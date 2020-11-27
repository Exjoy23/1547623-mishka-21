"use strict";

const buttonOpenModal = document.querySelectorAll('.open-modal');
const modal = document.querySelector('.modal');
const buttonAdd = modal.querySelector('.modal__button');

buttonOpenModal.forEach(item => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--active');
  });
});

buttonAdd.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal--active');
});

modal.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('modal')) {
    modal.classList.remove('modal--active');
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key == 'Escape') {
    modal.classList.remove('modal--active');
  }
});
