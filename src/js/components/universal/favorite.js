const favoriteList = document.querySelector('.favorite__list');

const favoriteRender = () => {
  let storage;
  window.addEventListener('storage', function () {
    (localStorage.getItem('favorite')) ? storage = JSON.parse(localStorage.getItem('favorite')) : storage = [];
  });
  favoriteList.innerHTML = '';

  fetch("https://6341ca7920f1f9d79979deb0.mockapi.io/product_collections")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      data.forEach((el) => {
        storage.forEach((fav) => {
          if (el.title == fav.category) {
            let category = el.title;
            el.products.forEach((prod) => {
              if (prod.title == fav.title) {
                console.log(prod);
                favoriteList.innerHTML += `
            <li class="favorite__item item" data-code="${prod.chars.Артикул}" data-category="${category}">
              <img src="${prod.mainImage}" alt="${prod.title}" class="favorite__img" />
              <div class="favorite__content">
                <span class="favorite__art art-text">АРТ 222</span>
                <a href="item.html" class="favorite__name name">${prod.title}</a>
                <div class="favorite__lower">
                  <span class="favorite__price price">${prod.price}&nbsp;&#8381;</span>
                  <button class="favorite__delete btn--delete btn"></button>
                </div>
              </div>
            </li>
                `;
              }
            })
          }
        })
      });
    })
    .then((data) => {
      deleteItem(storage);
      emptyCheck(storage, favoriteList);
      showItem();
    })
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
      emptyCheck(storage, favoriteList);
    });
  });
}

(favoriteList) ? favoriteRender() : false;
