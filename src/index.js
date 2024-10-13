import classes from "./styles/styles.scss";

const pictures = require("./data/pictures.json");
console.log(pictures);

document.body.className = classes.body;
console.log("Hello world!");

function openMobileMenu() {
  const menu = document.querySelector(".menu-mobile");
  menu.classList.add("show");
}

function onCloseMobileMenu() {
  const menu = document.querySelector(".menu-mobile");
  menu.classList.remove("show");
}

document.querySelector(".menu-toggle").addEventListener("click", openMobileMenu);
document.querySelector(".menu-mobile__btn").addEventListener("click", onCloseMobileMenu);
