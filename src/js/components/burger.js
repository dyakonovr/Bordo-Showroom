const burger = document.querySelector('.burger');

if (burger) {
  burger.addEventListener('click', function (e) {
    const nav = document.querySelector('.header nav');
    const headerList = document.querySelector('.header__list');
    if (burger.matches('.burger--active')) {
      e.currentTarget.classList.remove('burger--active');
      nav.classList.remove('nav--active');
      enableScroll();
    } else {
      e.currentTarget.classList.add('burger--active');
      nav.classList.add('nav--active');
      disableScroll();
    }
  });
}