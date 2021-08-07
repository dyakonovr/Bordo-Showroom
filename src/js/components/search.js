const searchIcon = document.querySelector('.search-js');
const searchBlock = document.querySelector('.search-block-js');
const iconsList = document.querySelector('.header__icons');
const input = document.querySelector('.header-input-js');

if (searchIcon && searchBlock) {
  iconsList.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.contains('.search-js')) toggleVisibility(searchBlock);
  });

  // document.addEventListener('click', function (event) {
  //   if (searchBlock.contains(event.target) && !iconsList.contains(event.target)) return;
  //   else if (!searchBlock.contains(event.target) && !iconsList.contains(event.target)) {
  //     toggleVisibility(searchBlock);
  //     input.value = '';
  //   }
  // });

  // console.log('2');
  // function handleClick(event) {
  //   console.log('4');
  //   if (searchBlock.contains(event.target)) return;
  //   else if (!searchBlock.contains(event.target) && searchBlock.style.display == 'block') console.log('close');
  // }
  // console.log('3');
  // document.addEventListener('click', handleClick);
}

