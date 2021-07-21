const swiper = new Swiper('.swiper-container', {
  autoplay: { delay: 3000 },
  effect: 'fade',
  fadeEffect: { crossFade: true },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '<i></i>' + '<b></b>' + '</span>';
    },
  },
});
