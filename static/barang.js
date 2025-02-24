let iconcart = document.querySelector('.icon-cart');
let closecart = document.querySelector('.close');
let body = document.querySelector('body');

iconcart.addEventListener('click', () => {
body.classList.toggle('showcart')
})
closecart.addEventListener('click', () => {
body.classList.toggle('showcart')

})