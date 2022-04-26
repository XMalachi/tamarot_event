/*Hamburger Animation*/
const mainMenu = document.querySelector(`.mainMenu`);
const closeMenu = document.querySelector(`.closeMenu`);
const openMenu = document.querySelector(`.openMenu`);
const openservice = document.querySelector(`.openservice`);
const opencontact = document.querySelector(`.opencontact`);


openMenu.addEventListener(`click`,show);
closeMenu.addEventListener(`click`,close);
openservice.addEventListener(`click`,close);
opencontact.addEventListener(`click`,close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}
function close() {
    mainMenu.style.top = '-150%';

}

// Carousel slides 
// greeting carousel 
var slideIndex = 0;

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4000); 
}

var index = 0;
slideAction();

function slideAction() {
  var i;
  var x = document.getElementsByClassName("mySlide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  index++;
  if (index > x.length) {index = 1} 
  x[index-1].style.display = "block"; 
  setTimeout(slideAction, 4000); 
}
