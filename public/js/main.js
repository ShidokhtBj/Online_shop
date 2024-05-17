/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let menu = document.querySelector(".header__bottom");
let header = document.getElementById("navbar");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menu.style.top = "0px";
    menu.classList.add("translate-y-1");
    menu.classList.add("duration-700");
  } else {
    menu.style.top = "-30px";
    menu.classList.add("-translate-y-1");
    menu.classList.add("duration-700");
  }
  prevScrollpos = currentScrollPos;
};

const headerTop = document.querySelector(".header__top");
const headerCenter = document.querySelector(".header__center");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  const windowWidth = window.innerWidth;

  if (windowWidth <= 1023) {
    if (currentScrollTop > lastScrollTop) {
      // Scroll down
      headerTop.style.display = "none";
      headerCenter.style.position = "fixed";
      headerCenter.style.top = "0";
    } else {
      // Scroll up
      if (currentScrollTop === 0) {
        headerTop.style.display = "flex";
      }
      headerCenter.style.position = "static";
    }
  } else {
    headerTop.style.display = "flex";
    headerCenter.style.position = "static";
  }

  lastScrollTop = currentScrollTop;
});











