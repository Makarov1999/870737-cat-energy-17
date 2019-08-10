var menuButton = document.querySelector(".main-nav__toggle");
var menuList = document.querySelector(".site-list");

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
