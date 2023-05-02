import toggleVisibility from '../../functions/toggleVisibility.js';

const searchIcon = document.querySelector('.search-js');
const searchIconMob = document.querySelector('.search-mob-js');
const searchBlock = document.querySelector('.search-block-js');
const searchBackBtn = document.querySelector('#search-back-btn');
const iconsList = document.querySelector('.header__icons');
const input = document.querySelector('.header-input-js');

if ((searchIcon || (searchIconMob && searchBackBtn)) && searchBlock) {
  searchIcon.addEventListener('click', function () {
    toggleVisibility(searchBlock);
  });

  searchIconMob.addEventListener('click', function (e) {
    searchBlock.classList.add('header__search--active');
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const its_icon = target.classList.contains('search-js');
    const its_mob = target.classList.contains('search-mob-js');
    const its_block = target == searchBlock || searchBlock.contains(target);
    const block_active = searchBlock.style.display == 'block';

    if (!its_block && block_active && !its_icon && !its_mob) {
      toggleVisibility(searchBlock);
      input.value = '';
    }
  });

  searchBackBtn.addEventListener('click', function () { 
    searchBlock.classList.remove('header__search--active');
  });
}

