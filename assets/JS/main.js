// ================= TOGGLE MENU FOR MOBILE SCREENS =================
const toggleButton = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu')
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('max-lg:right-[-120%]');
    navMenu.classList.toggle('max-lg:-right-4');
})

// ================= CLOSE MENU FOR MOBILE SCREENS =================
const closeButton = document.querySelector('.nav_close');
const hideMenu = () => {
    navMenu.classList.toggle('max-lg:-right-4');
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
    } else {
        header.classList.remove('shadow-lg');
    }
})

// ============= SWIPER JS ==================== 
const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// ====================== SHOW FAQ ANSWERS ======================

const accordians = document.querySelectorAll('.accordian');

accordians.forEach(el => {
    el.addEventListener('click', () => {
        const answer = el.querySelector('.answer');
        const icon = el.querySelector('i');

        answer.classList.toggle('hidden');
        icon.classList.toggle('rotate-0!');
        icon.classList.toggle('rotate-45');

        el.classList.toggle('bg-[var(--color-container-color)]!')
        el.classList.toggle('bg-[var(--color-green-color-light)]!')
    })
})

// ============= SCROLL UP BUTTON JS ==================== 

const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll', () => {
    if(this.scrollY >= 350){
        scrollUp.classList.remove('bottom-[-110%]');
        scrollUp.classList.add('bottom-6');
    }else{
        scrollUp.classList.remove('bottom-6');
        scrollUp.classList.add('bottom-[-110%]');
    }
})


// =============+++++++++++++++++++++++++++++ SCROLL REVEAL ANIMATIONS ++++++++++++++++++++++++++++==================== 

const sr = ScrollReveal ({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
});


sr.reveal('.nav', { origin: 'top', delay: 2000 });

sr.reveal('.home_title, .home_discription, .home_form', { origin: 'top', interval: 100 });
sr.reveal('.home_form', { delay: 500 });
sr.reveal('.home_image', { origin: 'left', delay: 900 });
sr.reveal('.home_card', { origin: 'right',  delay: 1400 });

sr.reveal('.about_profiles', { interval: 100 });
sr.reveal('.about_sub_heading, .about_logo', { delay: 500 });
sr.reveal('.stats_card', { delay: 900, interval: 200 });

sr.reveal('.container_heading, .content_grid, .img_grid', { interval: 100 });
sr.reveal('.content_grid, .img_grid', { delay: 500 });

sr.reveal('.section_title', { interval: 100 });
sr.reveal('.platform_card, .platform_cta_card', { delay: 500, });


sr.reveal('.reviews_swiper', { delay: 500 });

sr.reveal('.accordian', { delay: 500, interval : 100 });

sr.reveal('.featured_image', { delay: 1000 });

sr.reveal('.cat_title, .cta_discription, .cta_button', { interval: 100 });

sr.reveal('.footer_newsLater, .footer_list, .footer_copy', { interval: 100 });