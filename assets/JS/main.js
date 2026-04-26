// ================= TOGGLE MENU FOR MOBILE SCREENS =================
const toggleButton = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu')
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('max-lg:right-[-120%]');
    navMenu.classList.toggle('max-lg:right-0');
})

// ================= CLOSE MENU FOR MOBILE SCREENS =================
const closeButton = document.querySelector('.nav_close');
closeButton.addEventListener('click', () => {
    navMenu.classList.toggle('max-lg:right-0');
    navMenu.classList.toggle('max-lg:right-[-120%]');
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