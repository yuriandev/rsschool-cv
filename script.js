/* Nav hamburger */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

/* Slider */
const sliders = document.querySelectorAll(".slide");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

let currentSliderIndex = 0;
let isShowed = true;

function previousSlide(a) {
  hideSlider("to-left");
  changeSliderItem(a - 1);
  showSlider("from-right");
}
function nextSlide(a) {
  hideSlider("to-right");
  changeSliderItem(a + 1);
  showSlider("from-left");
}
function changeSliderItem(a) {
  console.log("change currentSliderIndex", currentSliderIndex);
  currentSliderIndex = (a + sliders.length) % sliders.length;
  console.log("new currentSliderIndex", currentSliderIndex);
}
function hideSlider(direction) {
  isShowed = false;
  sliders[currentSliderIndex].classList.add(direction);
  sliders[currentSliderIndex].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showSlider(direction) {
  sliders[currentSliderIndex].classList.add("next", direction);
  sliders[currentSliderIndex].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isShowed = true;
  });
}

leftButton.addEventListener(
  "click",
  function () {
    console.log("Pushed left button", currentSliderIndex);
    if (isShowed) {
      previousSlide(currentSliderIndex);
    }
  },
  { passive: true }
);

rightButton.addEventListener(
  "click",
  function () {
    console.log("Pushed right button", currentSliderIndex);
    if (isShowed) {
      nextSlide(currentSliderIndex);
    }
  },
  { passive: true }
);
