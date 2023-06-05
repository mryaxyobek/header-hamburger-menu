const elHamburgerBtn = document.querySelector('.hamburger-btn');
const elExitBtn = document.querySelector('.exit-btn');
const elNavbarMenu = document.querySelector('.mobile-navbar-menu');
const elBlurFilter = document.querySelector('.blur-filter');

// Hamburger menu
elHamburgerBtn.addEventListener('click', function () {
    elNavbarMenu.classList.toggle('display-block')
    elBlurFilter.classList.toggle('blur-filter-active')
})
// Exit 
elExitBtn.addEventListener('click', function () {
    elNavbarMenu.classList.toggle('display-block')
    elBlurFilter.classList.toggle('blur-filter-active')
})
// remove blur and exit
elBlurFilter.addEventListener('click', function () {
    elBlurFilter.classList.toggle('blur-filter-active')
    elNavbarMenu.classList.toggle('display-block')
})
// night mode 
const elNightModeBtn = document.querySelector('.night-mode-btn');

elNightModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('night-mode')
})
// mobile night mode 
const elMobileNightModeBtn = document.querySelector('.mobile-night-mode-btn');

elMobileNightModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('night-mode')
})