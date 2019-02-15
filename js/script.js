var menu = document.querySelector(".nav__menu");
var nav = document.querySelector(".nav__link-section");
var options = document.querySelectorAll(".options__item");
menu.addEventListener('click', function () {
  if (nav.classList.contains("nav_hidden"))
    nav.classList.remove("nav_hidden");
  else
    nav.classList.add("nav_hidden");
})

document.addEventListener('click', function (e) {
  if (e.target.classList.contains("categories__map")) {
    document.querySelector(".iframe-map").classList.add("show");
  }
  else
    document.querySelector(".iframe-map").classList.remove("show");
})

for (var j = 0; j < options.length; j++) {
  options[j].querySelector(".options__title").addEventListener('click', function (e) {
    var z;
    for (z = 0; z < options.length; z++) {
      if (options[z].querySelector(".options__title") == e.currentTarget) {
        break;
      }
    }
    var buf = options[z].querySelectorAll(".options__text");
    if (options[z].querySelector(".options__text").classList.contains("options__text_hidden")) {
      for (var i = 0; i < buf.length; i++) {
        buf[i].classList.remove("options__text_hidden");
      }
    } else {
      for (var i = 0; i < buf.length; i++) {
        buf[i].classList.add("options__text_hidden");
      }
    }
  })
}