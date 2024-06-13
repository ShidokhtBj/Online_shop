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

/*const email =document.getElementById('email');
const form =document.getElementById('form');
const errorElement =document.getElementById('error');
form.addEventListener('submit', (e) =>{
  let messages = []
  if(email.value === '' || email.value === null){
    messages.push('Email is required')
  }
  if(email.value =! isEmail){
    messages.push('Email is right')
  }
  if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText =messages.join(', ')
  }
 
});

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

form.addEventListener('submit', (e) => {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	let messages = []
	if(emailValue === '') {
		messages.push('Email cannot be blank');
	} else if (!isEmail(emailValue)) {
    messages.push('Not a valid email');
	} else {
    messages.push(email);
	}
	if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText =messages.join(', ')
  }
});


	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}*/

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
