const swiperCarrossel = new Swiper('.card-wrapper', {
    
    loop: true,
    spaceBetween: 50,

    speed: 1000,
    autoplay: { 
        delay: 2000,
        disableOnInteraction: false,
    },
  // Bolinhas das páginas
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

// pausa autoplay ao passar o mouse
const swiperEl = document.querySelector('.card-wrapper');;

swiperEl.addEventListener('mouseenter', () => {
  swiperCarrossel.autoplay.stop(); // pausa
  document.body.classList.add('hovering');
});

swiperEl.addEventListener('mouseleave', () => {
  swiperCarrossel.autoplay.start(); 
  document.body.classList.remove('hovering'); 
});