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
  currentSliderIndex = (a + sliders.length) % sliders.length;
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
    if (isShowed) {
      previousSlide(currentSliderIndex);
    }
  },
  { passive: true }
);

rightButton.addEventListener(
  "click",
  function () {
    if (isShowed) {
      nextSlide(currentSliderIndex);
    }
  },
  { passive: true }
);

console.log(`
Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/cv/html-css-git.md
Done 06.09.2022 / deadline 28.09.2022
Score: 150 / 160
- [x] вёрстка валидная +10
- [x] вёрстка семантическая, 8 семантических тегов + 4 заголовковб 12*2=24.  +20
- [x] для оформления СV используются css-стили. +10
- [x] контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы. +10
- [x] вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется. +10
- [x] есть адаптивное бургер-меню. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10
- [x] на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым). +10
- [x] контакты для связи и перечень навыков оформлены в виде списка ul > li. +10
- [x] CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского. +10
- [x] CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. +10
- [x] CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
- [x] CV выполнено на английском языке. +10
- [x] выполнены требования к репозиторию. +10
- [x] есть видеорезюме автора CV на английском языке. +10
- [x] дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию. +10
`);
