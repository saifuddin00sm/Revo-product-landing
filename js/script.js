const humBurger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');
const showModal = document.querySelector('.proto-main .details-btns');
const closeModal = document.querySelector('.modal-content .close-modal');
const modalContainer = document.querySelector('.modal-container');
const modalBackBtn = document.querySelector('.modal-container .modal-text .back-btn');
// Toggle responsive nav menu button
function toggleNavFunc(bars) {
    for (let i = 0; i < bars.children.length; i++) {
        bars.children[i].classList.toggle('change');
    }
    // toggling nav menu
    navMenu.classList.toggle('nav-toggle');
}

/*
----------------------------
EventListeners
---------------------------
*/
//humBurger EventListener
humBurger.addEventListener('click', function() { toggleNavFunc(this) });

// Adding background to the header onscroll
window.onscroll = () => {
    window.scrollY > 100 ? header.classList.add('scroll-bg') : header.classList.remove('scroll-bg');
};

// show modal
showModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.style.display = 'flex';
});

// close modal 
const modalCloseFunc = (e) => {
    e.preventDefault();
    modalContainer.style.display = 'none';
}

closeModal.addEventListener('click', modalCloseFunc);
modalBackBtn.addEventListener('click', modalCloseFunc);

// Swiper js (for header slider)
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// Tiny Slider
const slider = tns({
    container: '#based',
    controls: false,
    nav: false,
    items: 1,
    mouseDrag: true,
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 30,
            items: 3
        },
        900: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
});

// testimonial slider
const testySlider = tns({
    container: '.testimonial-slider',
    items: 1,
    mouseDrag: true,
    nav: false,
    speed: 800,
    controls: false,
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 2,
        },
        700: {
            gutter: 30,
            items: 2
        },
        900: {
            items: 2
        },
        1000: {
            items: 3,
            controls: true
        }
    }
});

// tns control 
const prevBtn = document.querySelector('.testimonial [data-controls="prev"]');
const nextBtn = document.querySelector('.testimonial [data-controls="next"]');

prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

// lightbox
const videoPlayBtn = document.querySelector('.play-btn');
const videoLightBox = document.querySelector('.video-lightBox');
const closeVideoLighboxBtn = document.querySelector('.closeVideoLighbox');

videoPlayBtn.addEventListener('click', () => {
    videoLightBox.style.display = 'flex';
});

closeVideoLighboxBtn.addEventListener('click', () => {
    videoLightBox.style.display = 'none';
});


// aos js
AOS.init({
    offset: 120,
    delay: 500,
    duration: 800,
    easing: 'ease',
});