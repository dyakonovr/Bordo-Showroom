const popupAction = function (parentClass) {
  const popup = document.querySelector(parentClass);
  const popupClose = popup.querySelector('.popup__close');

  toggleVisibility(popup);
  disableScroll();
  
  popupClose.addEventListener('click', function () {
    toggleVisibility(popup);
    enableScroll();
  });
}