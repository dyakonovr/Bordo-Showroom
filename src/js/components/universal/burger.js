import disableScroll from '../../functions/disableScroll.js';
import enableScroll from '../../functions/enableScroll.js';
import toggleVisibility from '../../functions/toggleVisibility.js';

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
    else if (searchBlock.matches('.header__search--active')) {
      searchBlock.classList.remove('header__search--active')
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