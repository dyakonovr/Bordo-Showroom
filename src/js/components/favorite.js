const favoriteList = document.querySelector('.favorite__list');

const favoriteRender = () => {
  let storage;
  (localStorage.getItem('favorite')) ? storage = JSON.parse(localStorage.getItem('favorite')) : storage = [];
  favoriteList.innerHTML = '';
  storage.forEach((item) => {
    console.log(item);
    favoriteList.innerHTML += `
            <li class="favorite__item item" data-code="${item.code}" data-category="${item.category}">
              <img src="${item.img}" alt="${item.title}" class="favorite__img" />
              <div class="favorite__content">
                <span class="favorite__art art-text">АРТ ${item.art}</span>
                <a href="item.html" class="favorite__name name">${item.title}</a>
                <div class="favorite__lower">
                  <span class="favorite__price price">${item.price}&nbsp;&#8381;</span>
                  <button class="favorite__delete btn--delete btn"></button>
                </div>
              </div>
            </li>
    `;
  });
  deleteItem(storage);
  emptyCheck(storage);
  showItem();
}

const deleteItem = (storage) => {
  let btnsDelete = document.querySelectorAll('.favorite__delete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      let item = e.target.parentElement.closest('.favorite__item');
      let title = item.querySelector('.favorite__name').textContent;
      item.remove();
      storage.forEach((el, index) => {
        if (el.title == title) {
          delete storage[index];
        }
      });
      storage = storage.filter(n => n);
      localStorage.setItem('favorite', JSON.stringify(storage));
      emptyCheck(storage);
    });
  });
}

const emptyCheck = (storage) => {
  if (storage.length == 0) favoriteList.innerHTML += `<li class="empty">Тут пусто..</li>`;
};

const showItem = () => {
  const names = document.querySelectorAll('.name');
  names.forEach((name) => {
    name.addEventListener('click', function (e) {
      let parent = e.target.parentElement.closest('.item');
      let code = parent.dataset.code;
      let title = parent.dataset.category;
      localStorage.setItem('current_item', JSON.stringify({ code, title}));
    });
  });
}

(favoriteList) ? favoriteRender() : false;