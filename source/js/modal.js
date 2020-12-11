"use strict";

const body = document.querySelector('.page__body');
const buttonOpenModal = document.querySelectorAll(".open-modal");
const modal = document.querySelector(".modal");
const buttonAdd = modal.querySelector(".modal__button");

function openModal() {
  modal.classList.add("modal--active", "modal--show");
  body.classList.add("page__body--modal");
}

function closeModal() {
  modal.classList.add("modal--hide");
  setTimeout(() => {
    modal.classList.remove("modal--active", "modal--show", "modal--hide", "page__body--modal");
    body.classList.remove("page__body--modal");
  }, 1500);
}

buttonOpenModal.forEach(item => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();
    openModal();
  });
});

buttonAdd.addEventListener("click", (evt) => {
  evt.preventDefault();
  closeModal();
});

modal.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("modal")) {
    closeModal();
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key == "Escape") {
    closeModal();
  }
});
