var menuButton = document.querySelector(".main-nav__toggle");
var menuList = document.querySelector(".site-list");
var slide = document.querySelector(".example__slide--before");
var sliderBeforeButton = document.querySelector(".slider-control__toggle--before");
var sliderAfterButton = document.querySelector(".slider-control__toggle--after");

console.log(slide);
console.log(sliderBeforeButton);
console.log(sliderAfterButton);

menuButton.classList.remove("main-nav__toggle--close");
menuButton.classList.add("main-nav__toggle--menu");
menuList.classList.remove("site-list--open");

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (menuButton.classList.contains("main-nav__toggle--menu")) {
    menuButton.classList.remove("main-nav__toggle--menu");
    menuButton.classList.add("main-nav__toggle--close");
    menuList.classList.add("site-list--open");
  } else {
    menuButton.classList.remove("main-nav__toggle--close");
    menuButton.classList.add("main-nav__toggle--menu");
    menuList.classList.remove("site-list--open");
  }
});

  sliderBeforeButton.addEventListener("click", function() {
    if (!slide.classList.contains("js-before--active") && !slide.classList.contain("js-after--active")) {
      slide.classList.add("js-before--active");
    } else if (slide.classList.contains("js-after--active")) {
      slide.classList.remove("js-after--active");
      slide.classList.add("js-before--active")
    }
  });

  sliderAfterButton.addEventListener("click", function() {
    if (!slide.classList.contains("js-before--active") && !slide.classList.contain("js-after--active")) {
      slide.classList.add("js-after--active");
    } else if (slide.classList.contains("js-before--active")) {
      slide.classList.remove("js-before--active");
      slide.classList.add("js-after--active")
    }
  });
