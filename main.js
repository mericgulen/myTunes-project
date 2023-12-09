//* set current year

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//* show / hide menu

const navMenu = document.querySelector('.header');
const openMenu = document.querySelector('.mobile-nav');

openMenu.addEventListener('click', function () {
  navMenu.classList.toggle('nav-open');
});


