var menu = document.querySelector(".nav__menu");
var nav = document.querySelector(".nav__link-section");
menu.addEventListener('click', function () {
  if (nav.classList.contains("nav_hidden"))
    nav.classList.remove("nav_hidden");
  else
    nav.classList.add("nav_hidden");
})