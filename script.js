const elHamburgerBtn = document.querySelector('.hamburger-btn')
const elExitBtn = document.querySelector('.exit-btn')
const elNavbarMenu = document.querySelector('.mobile-navbar-menu')

elHamburgerBtn.addEventListener('click', function(){
    elNavbarMenu.classList.toggle('display-block')
    
})
elExitBtn.addEventListener('click', function(){
    elNavbarMenu.classList.toggle('display-block')
})
