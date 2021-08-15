let discountTitle = document.querySelector('.discount__title');
let slideTitles = document.querySelectorAll('.slide__title');
if (discountTitle) $clamp(discountTitle, { clamp: 2 });
if (slideTitles) slideTitles.forEach((title) => { $clamp(title, { clamp: 3 }) });

function toggleVisibility(el) {
  if (el) {
    let display = getComputedStyle(el).display;
    if (display == 'none') {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  }
}

function disableScroll() {
  let e = window.scrollY;
  document.body.classList.add("disable-scroll");
  document.body.dataset.position = e;
  document.body.style.top = -e + "px";
  document.body.style.paddingRight = scrollW + 'px';
}

function enableScroll() {
  let e = parseInt(document.body.dataset.position, 10);
  document.body.style.top = "auto";
  document.body.classList.remove("disable-scroll");
  document.body.style.paddingRight = 0;
  window.scroll({
    top: e,
    left: 0
  });
  document.body.removeAttribute("data-position");
}

function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}

const emptyCheck = (storage, section) => {
  if (storage.length == 0) {
    section.innerHTML += `<li class="empty">Тут пусто..</li>`;
    return true;
  } else {
    return false;
  }
};

const showItem = () => {
  const names = document.querySelectorAll('.name');
  names.forEach((name) => {
    name.addEventListener('click', function (e) {
      let parent = e.target.parentElement.closest('.item');
      let code = parent.dataset.code;
      let title = parent.dataset.category;
      localStorage.setItem('current_item', JSON.stringify({ code, title }));
    });
  });
}

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
