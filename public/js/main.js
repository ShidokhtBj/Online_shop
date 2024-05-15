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

//owl setup
$(document).ready(function () {
  //story slider
  $("#story").owlCarousel({
    rtl: true,
    items: 26,
    callbacks: false,
    autoplay: false,
    startPosition: 0,
    mouseDrag: true,
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      150: {
        items: 2,
      },
      300: {
        items: 3,
      },
      400: {
        items: 4,
      },
      500: {
        items: 5,
      },
      600: {
        items: 6,
      },
      700: {
        items: 7.5,
      },
      800: {
        items: 8,
      },
      900: {
        items: 8.5,
      },
      1000: {
        items: 10,
      },
      1200: {
        items: 11.5,
      },
      1400: {
        items: 12,
      },
    },
  });

  //main slider
  $("#slider-1").owlCarousel({
    rtl: true,
    items: 1,
    callbacks: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
  });

  //item-box(tablet)
  $("#slider-2").owlCarousel({
    rtl: true,
    items: 6,
    startPosition: 0,
    autoplay: false,
    margin: 0,
    loop: false,
    mouseDrag: true,
    nav: false,
    dots: true,
  });

  //special-offer(desktop)
  $("#slider-3").owlCarousel({
    rtl: true,
    items:16,
    startPosition:0,
    margin:3,
    loop:false,
    dots:false,
    nav:true,
    autoplay: false,
    mouseDrag: true,
    callbacks: false,
    responsiveClass: true,
    responsive:{
      1400:{
        items:6,
      }
    },
  });

});

//story slider nav setup
"#story".each(function (e) {
  var owl = $(this);
  if (!owl.data("owl.carousel").options.loop) {
    var options = owl.data("owl.carousel").options;
    owl.trigger("destroy.owl.carousel");
    owl.owlCarousel(options).on("changed.owl.carousel", (ev) => {
      if (!event.namespace) return;
      var carousel = event.relatedTarget,
        element = event.target,
        current = carousel.current();
      setTimeout(function () {
        $(".owl-next").toggleClass("disabled", current === carousel.maximum());
        $(".owl-prev").toggleClass("disabled", current === carousel.minimum());
      }, 1);
    });
  }
});

"#slider-3".each(function (e) {
  var owl = $(this);
  if (!owl.data("owl.carousel").options.loop) {
    var options = owl.data("owl.carousel").options;
    owl.trigger("destroy.owl.carousel");
    owl.owlCarousel(options).on("changed.owl.carousel", (ev) => {
      if (!event.namespace) return;
      var carousel = event.relatedTarget,
        element = event.target,
        current = carousel.current();
      setTimeout(function () {
        $(".owl-next").toggleClass("disabled", current === carousel.maximum());
        $(".owl-prev").toggleClass("disabled", current === carousel.minimum());
      }, 1);
    });
  }
});








