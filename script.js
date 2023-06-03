const elHamburgerBtn = document.querySelector('.hamburger-btn')
const elExitBtn = document.querySelector('.exit-btn')
const elNavbarMenu = document.querySelector('.mobile-navbar-menu')
elHamburgerBtn.addEventListener('click', function () {
    elNavbarMenu.classList.toggle('display-block')

})
elExitBtn.addEventListener('click', function () {
    elNavbarMenu.classList.toggle('display-block')
})

// night mode 
const elNightModeBtn = document.querySelector('.night-mode-btn')

elNightModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('night-mode')
})
// mobile night mode 
const elMobileNightModeBtn = document.querySelector('.mobile-night-mode-btn')

elMobileNightModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('night-mode')
})
