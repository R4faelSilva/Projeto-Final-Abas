const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

const swiperAbertura = new Swiper('.slider-container', {
  effect: 'slide',
  loop: true,
  speed: 1300,

  navigation: {
    nextEl: '#avanco',
    prevEl: '#voltar',
  },

});

sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {

    swiperAbertura.slideToLoop(index);
    // updatePagination(tab, index);
  });
});

const botaoSlide = document.querySelectorAll('.slider-button[data-bs-toggle="tab"');

botaoSlide.forEach(botao => {
  botao.addEventListener("click", (event) => {
    event.preventDefault();

    const idAba = botao.getAttribute('href')

    const navegacao = document.querySelector(`.nav-link[href="${idAba}"]`);

    if (navegacao) {
      navegacao.click();

    }

    const navManual = botao.dataset.targetManual;

    if (navManual) {
      setTimeout(() => {
        
        const local = document.querySelector(navManual);

        if (local) {
          local.scrollIntoView({ behavior: "smooth", block: "start"});
        }
      }, 300);
    }
  });
});