const burger = document.querySelector('.burger');
const searchBlock = document.querySelector('.search-block-js');

if (burger) {
  burger.addEventListener('click', function (e) {
    const nav = document.querySelector('.header nav');
    const input = document.querySelector('.header-input-js');
    if (searchBlock.style.display == 'block') {
      toggleVisibility(searchBlock);
      input.value = '';
    }
    else if (burger.matches('.burger--active')) {
      e.currentTarget.classList.remove('burger--active');
      nav.classList.remove('nav--active');
      enableScroll();

    }
    else {
      e.currentTarget.classList.add('burger--active');
      nav.classList.add('nav--active');
      disableScroll();
    }
  });
}