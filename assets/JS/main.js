// ================= TOGGLE MENU FOR MOBILE SCREENS =================
const toggleButton = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu')
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('max-lg:right-[-120%]');
    navMenu.classList.toggle('max-lg:right-0');
})

// ================= CLOSE MENU FOR MOBILE SCREENS =================
const closeButton = document.querySelector('.nav_close');
const hideMenu =  () => {
    navMenu.classList.toggle('max-lg:right-0');
    navMenu.classList.toggle('max-lg:right-[-120%]');
}
closeButton.addEventListener('click', hideMenu)

//CLOSE MENU WHEN CLICK ON NAV LINK IN MOBILE MENU 
const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach(link => {
    link.addEventListener('click', hideMenu)
})

// ================= ADD HEADER SHADOW ON SCROLL =================
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (this.scrollY >= 50) {
        header.classList.add('shadow-lg');
    }else{
        header.classList.remove('shadow-lg');
    }
})