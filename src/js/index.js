// burger.onclick = function() {
//     menubar.classList.toggle("hide");
//     burger.classList.toggle("burger-active");
// }

const burger = document.getElementById('burger');
const menubar = document.querySelector('.main-nav__menu');

burger.onclick = function() {
  menubar.classList.toggle('hide');
  burger.classList.toggle('burger-active');
};



