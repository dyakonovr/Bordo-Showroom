import Swiper, { Autoplay, EffectFade, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const sliderSection = document.querySelector('.slider');

if (sliderSection) {
  const swiper = new Swiper('.index-swiper', {
    modules: [Autoplay, Pagination, EffectFade],
    autoplay: { delay: 5000, disableOnInteraction: false },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    }
  });
}