const indexSliderRender = function () {
  let sliderSection = document.querySelector('.slider');

  if (sliderSection) {
    const swiper = new Swiper('.swiper-container', {
      autoplay: { delay: 3000, disableOnInteraction: false },
      effect: 'fade',
      fadeEffect: { crossFade: true },
      breakpoints: {
        577: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}" aria-label="Декоративная кнопка слайдера"><i></i><b></b></span>`;
            },
          },
        }
      }
    });
  }
}