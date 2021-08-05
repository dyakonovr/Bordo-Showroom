let storage, title;
if (localStorage.getItem('current_category')) {
  storage = JSON.parse(localStorage.getItem('current_category'))
  title = storage.title;
}
  
let categorySection = document.querySelector('.category__container');

if (storage && categorySection) {
  categorySection.innerHTML = '';
  const loadCategory = (title) => {
    fetch("../data/data.json")
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
                <a href="card.html" class="type__btn type__btn--watch">
                  <?xml version="1.0" encoding="iso-8859-1"?>
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.992 511.992"
                    style="enable-background: new 0 0 511.992 511.992;" xml:space="preserve">
                    <g>
                      <g>
                        <path d="M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105
                  			c-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886
                  			C512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128
                  			c25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424
                  			C463.013,282.065,362.256,383.996,255.995,383.996z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333
                  			S303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64
                  			S291.28,319.996,255.995,319.996z" />
                      </g>
                    </g>
                  </svg>
                </a>
                <button type="button" class="type__btn type__btn--buy">
                  <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="m472 452c0 11.046-8.954 20-20 20h-20v20c0 11.046-8.954 20-20 20s-20-8.954-20-20v-20h-20c-11.046 0-20-8.954-20-20s8.954-20 20-20h20v-20c0-11.046 8.954-20 20-20s20 8.954 20 20v20h20c11.046 0 20 8.954 20 20zm0-312v192c0 11.046-8.954 20-20 20s-20-8.954-20-20v-172h-40v60c0 11.046-8.954 20-20 20s-20-8.954-20-20v-60h-192v60c0 11.046-8.954 20-20 20s-20-8.954-20-20v-60h-40v312h212c11.046 0 20 8.954 20 20s-8.954 20-20 20h-232c-11.046 0-20-8.954-20-20v-352c0-11.046 8.954-20 20-20h60.946c7.945-67.477 65.477-120 135.054-120s127.109 52.523 135.054 120h60.946c11.046 0 20 8.954 20 20zm-121.341-20c-7.64-45.345-47.176-80-94.659-80s-87.019 34.655-94.659 80z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <strong class="type__subtitle">${el.title}</strong>
            <span class="type__price">${el.price} &#8381;</span>
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
  }

  loadCategory(title);
}