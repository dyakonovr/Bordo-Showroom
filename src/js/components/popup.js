const popupCont = document.querySelector('.popup__container');
const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.open-popup-btn');

if (popupCont && openPopup) {
  openPopup.addEventListener('click', function () {
    toggleVisibility(popup);
    disableScroll();
  });

  const popupClose = document.querySelector('.popup__close');
  popupClose.addEventListener('click', function () {
    toggleVisibility(popup);
    enableScroll();
  });
}