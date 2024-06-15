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

function scrollToTop() {
  window.scrollTo(0, 0);
}


const form = document.querySelector(".form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email");

function checkEmail() {
  const pattern = /^[^ ]+@[^ ]+\.com/;
  if (!emailInput.value.match(pattern)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  emailInput.addEventListener("keyup" , checkEmail)
  if(!emailField.classList.contains("invalid")){
    location.href = form.getAttribute("action");
  }
});


let clickme= document.querySelector("#Support_Open");
let Support_content= document.querySelector(".Support_content");
let flag=true;
clickme.addEventListener("click", function () {
 if(flag){
  this.innerHTML = ` <svg style="width: 24px; height: 24px; fill: #FFF;"><path fill-rule="evenodd" d="M18.364 7.05L16.95 5.636 12 10.586l-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z" clip-rule="evenodd"></path></svg>`;
  flag=false;
  Support_content.style.display = "flex"
  clickme.style.transform="rotate(180deg)"
 }else{
  this.innerHTML = `   <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px; fill: #fff;" width="24"  height="24" ><path fill-rule="evenodd" d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>`;
  flag=true;
  Support_content.style.display = "none"
  clickme.style.transform="rotate(365deg)"
 }
});
let closeMe= document.querySelector(".Support-close");
closeMe.insertAdjacentHTML("afterbegin","&times;");
closeMe.addEventListener("click",function(e){
  console.log(e);
  Support_content.style.display = "none";
  clickme.innerHTML = `   <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px; fill: #fff;" width="24"  height="24" ><path fill-rule="evenodd" d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>`;
  
  if(Support_content.style.display === "none"){
    clickme.style.transform="rotate(365deg)"
    flag=true;
  }else{
    flag=false;
   clickme.style.transform="rotate(180deg)"
  }
});