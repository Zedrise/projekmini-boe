let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
//footer
document.getElementById("year").textContent = new Date().getFullYear();

menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
}
window.onscroll = () => {
menu.classList.remove('bx-x');
navbar.classList.remove('active');
}
