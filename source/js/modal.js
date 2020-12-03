'use strict';

const buttonOpenModal = document.querySelectorAll('.open-modal');
const modal = document.querySelector('.modal');
const buttonAdd = modal.querySelector('.modal__button');

function openModal() {
  modal.classList.add('modal--active');
  modal.classList.add('modal--show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('modal--hide');
  setTimeout(() => {
    modal.classList.remove('modal--active');
    modal.classList.remove('modal--show');
    modal.classList.remove('modal--hide');
  }, 1000);
  document.body.style.overflow = '';
}

buttonOpenModal.forEach(item => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModal();
  });
});

buttonAdd.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

modal.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('modal')) {
    closeModal();
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key == 'Escape') {
    closeModal();
  }
});
