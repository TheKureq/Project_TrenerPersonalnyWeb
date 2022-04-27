const navbarShow = document.querySelector('.navbar-collapse');
const navItem1 = document.querySelector('.item-1');
const navItem2 = document.querySelector('.item-2');
const navItem3 = document.querySelector('.item-3');
const navItem4 = document.querySelector('.item-4');
const navItem5 = document.querySelector('.item-5');
const navItem6 = document.querySelector('.item-6');
const navItem7 = document.querySelector('.item-7');
const navItem8 = document.querySelector('.item-8');

navItem1.addEventListener('click', () => navbarShow.classList.remove('show'));
navItem2.addEventListener('click', () => navbarShow.classList.remove('show'));
navItem3.addEventListener('click', () => navbarShow.classList.remove('show'));
navItem4.addEventListener('click', () => navbarShow.classList.remove('show'));
navItem5.addEventListener('click', () => navbarShow.classList.remove('show'));
navItem6.addEventListener('click', () => navbarShow.classList.remove('show'));
navItem7.addEventListener('click', () => navbarShow.classList.remove('show'));
navItem8.addEventListener('click', () => navbarShow.classList.remove('show'));

navDropdown.forEach((item) =>
	item.addEventListener('click', () => navbarShow.classList.remove('show'))
);
