new Glide('.hero-glide', {
    type: 'carousel',
    autoplay: 7000,
    hoverpause: false,
    animationDuration: 800,
    animationTimingFunc: 'ease-out',
    perView: 1
}).mount()

const header = document.getElementById('header')
const openMobileNav = document.getElementById('open-mobile-nav')
const closeMobileNav = document.getElementById('close-mobile-nav')
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body
const glide = document.querySelector('.glide')

openMobileNav.addEventListener('click', () => {
    mobileNav.classList.add('show')
    body.classList.add('lock-scroll')
})

closeMobileNav.addEventListener('click', () => {
    mobileNav.classList.remove('show')
    body.classList.remove('lock-scroll')
})

window.onscroll = function () {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        header.classList.add('active-scroll')
    }
    else {
        header.classList.remove('active-scroll')
    }
};

new Glide('.client-glide', {
    type: 'carousel',
    hoverpause: false,
    animationDuration: 800,
    animationTimingFunc: 'ease-out',
    perView: 6,
    gap: '30px',
    breakpoints: {
        1200: {
            perView: 5,
            autoplay: 3000,
            animationDuration: 500
        },
        950: {
            perView: 4,
            autoplay: 3000,
            animationDuration: 500
        },
        760: {
            perView: 3,
            autoplay: 3000,
            animationDuration: 500
        },
        480: {
            perView: 2,
            autoplay: 3000,
            animationDuration: 500
        }
    }
}).mount()
