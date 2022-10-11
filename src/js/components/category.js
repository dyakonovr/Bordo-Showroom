let storage, title;
if (localStorage.getItem('category')) {
  storage = JSON.parse(localStorage.getItem('category'))
  title = storage.title;
}

let categorySection = document.querySelector('.category__container');

if (storage && categorySection) {
  categorySection.innerHTML = '';
  const loadCategory = (title) => {
    fetch("https://6341ca7920f1f9d79979deb0.mockapi.io/product_collections")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        data.forEach(el => {
          if (el.title == title) {
            categorySection.innerHTML += `
          <h1 class="category__title subtitle">${el.title}</h1>
          <div class="category__wrapper">
            <div class="category__filters">
              <div class="category__prop">
                <h2 class="category__subtitle">Категории</h2>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Футболка</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Топ</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Майка</span>
                </label>
              </div>
              <div class="category__prop">
                <h2 class="category__subtitle">Страна производства</h2>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Россия</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Китай</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Турция</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Италия</span>
                </label>
              </div>
              <div class="category__prop">
                <h2 class="category__subtitle">Материал</h2>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Россия</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Китай</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Турция</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Италия</span>
                </label>
              </div>
              <div class="category__prop">
                <h2 class="category__subtitle">Размер</h2>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Россия</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Китай</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Турция</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Италия</span>
                </label>
              </div>
              <div class="category__prop">
                <h2 class="category__subtitle">Сезон</h2>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Россия</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Китай</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Турция</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Италия</span>
                </label>
              </div>
              <div class="category__prop">
                <h2 class="category__subtitle">Цвет</h2>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Россия</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Китай</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Турция</span>
                </label>
                <label class="category__label">
                  <input type="checkbox" class="category__checkbox">
                  <span class="category__caption">Италия</span>
                </label>
              </div>
              <button class="category__btn btn btn--primary">Применить</button>
            </div>
            <div class="category__items"></div>
          </div>
            `;

          }
        });
        return data;
      })
      .then((data) => {
        let categoryItems = document.querySelector('.category__items');
        data.forEach((el) => {
          if (el.title == title) {
            el.products.forEach((el) => {
              categoryItems.innerHTML += `
                <li class="type__item" data-code="${el.chars.Артикул}">
            <div class="type__picture">
              <img src="${el.mainImage}" alt="${el.title}" class="type__img">
              <div class="type__btns">
                <a href="card.html" class="type__btn type__btn--watch"></a>
              </div>
            </div>
            <strong class="type__subtitle">${el.title}</strong>
            <span class="type__price">${normalPrice(el.price)} &#8381;</span>
            <div class="type__colors">
              <span class="type__color" style="background-color: ${Object.values(el.colors)[0]}"></span>
              <span class="type__color" style="background-color: ${Object.values(el.colors)[1]}"></span>
              <span class="type__color" style="background-color: ${Object.values(el.colors)[2]}"></span>
            </div>
          </li>
              `;
            });
          }
        });
      })
      .then(() => {
        let subtitles = document.querySelectorAll('.type__subtitle');
        for (let subtitle of subtitles) {
          $clamp(subtitle, { clamp: 1 });
        }
      })
  }

  loadCategory(title);
}
