import classes from "./styles/styles.scss";
let select = 1;
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

function addActiveAndLoadJson(country) {
  const countryName = document.querySelector(`${country}`);

  const allBtns = document.querySelectorAll(".round-btn");
  console.log(countryName);
  console.log(allBtns);
  for (let el of allBtns) {
    console.log(el);
    el.classList.remove("active");
  }
  countryName.classList.add("active");
  select = 2;
  console.log(select);
}

document.querySelector(".menu-toggle").addEventListener("click", openMobileMenu);
document.querySelector(".menu-mobile__btn").addEventListener("click", onCloseMobileMenu);

document.querySelector(".germany").addEventListener("click", () => addActiveAndLoadJson(".germany"));
document.querySelector(".england").addEventListener("click", () => addActiveAndLoadJson(".england"));
document.querySelector(".france").addEventListener("click", () => addActiveAndLoadJson(".france"));
