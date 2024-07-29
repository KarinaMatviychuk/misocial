// burger.onclick = function() {
//     menubar.classList.toggle("hide");
//     burger.classList.toggle("burger-active");
// }

const burger = document.getElementById('burger');
const menubar = document.querySelector('.hide');

burger.onclick = function() {
  menubar.classList.toggle('hide');
  burger.classList.toggle('burger-active');
};