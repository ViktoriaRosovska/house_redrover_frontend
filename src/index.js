import classes from "./styles/styles.scss";

const pictures = require("./data/pictures.json");
console.log(pictures);

document.body.className = classes.body;
console.log("Hello world!");

function openMobileMenu() {
  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-mobile");

  // Добавляем событие клика на кнопку гамбургер-меню
  toggleButton.addEventListener("click", () => {
    // Переключаем класс "show" для отображения/скрытия меню
    menu.classList.add("show");

    // Переключаем класс "rotate" для вращения иконки гамбургер-меню
    // toggleButton.classList.toggle("rotate");
  });
}

function onCloseMobileMenu() {
  const closeMobMenuBtn = document.querySelector(".menu-mobile__btn");
  const menuMobile = document.querySelector(".menu-mobile");
  closeMobMenuBtn.addEventListener("click", () => {
    menuMobile.classList.remove("show");
  });
}

window.openMobileMenu = openMobileMenu;
window.onCloseMobileMenu = onCloseMobileMenu;
