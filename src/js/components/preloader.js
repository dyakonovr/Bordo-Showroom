let scrollW = getScrollbarWidth();

let preloader = document.querySelector('.preloader');
disableScroll();
document.addEventListener('DOMContentLoaded', function () {
  if (preloader) {
    setTimeout(function () {
      window.scrollTo(0, 0);
      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
        preloader.addEventListener('transitionend', enableScroll);
        indexSliderRender();
      }
    }, 1000);
  }
});