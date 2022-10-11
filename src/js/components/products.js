const lists = document.querySelector('#lists');
let listsQuantity = 11;
if (location.href.split("/").slice(-1)[0] == 'item.html') listsQuantity = 3;

const productRender = (quanL) => {
  lists.innerHTML = '';
  fetch("https://6341ca7920f1f9d79979deb0.mockapi.io/product_collections")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      let dataL = data.length;
      for (let i = 0; i < dataL; i++) {
        if (i < quanL) {
          let curr = data[i];
          let prod = curr.products;
          lists.innerHTML += `
          <div class="type__element" data-el-id="${i}">
            <div class="type__upper">
              <span class="type__title" aria-label="Категория товаров">${curr.title}</span>
              <span class="type__all"><a href="category.html">Все товары&nbsp;&rsaquo;</a></span>
            </div>
            <div class="type__lower">
              <ul class="type__list-card" data-list-id="${i}">
              </ul>
            </div>
          </div>`;

          for (let k = 0; k < prod.length; k++) {
            const el = prod[k];
            const list = document.querySelector(`.type__list-card[data-list-id="${i}"]`);
            list.innerHTML += `
              <li class="type__item" data-code="${el.chars.Артикул}">
                <div class="type__picture">
                  <img src="${el.mainImage}" alt="${el.title}" class="type__img" aria-label="Фото товара">
                  <div class="type__btns">
                    <a href="item.html" class="type__btn type__btn--watch"></a>
                  </div>
                </div>
                <strong class="type__subtitle">${el.title}</strong>
                <span class="type__price">${normalPrice(el.price)} &#8381;</span>
                <div class="type__colors">
                  <span class="type__color" style="background-color: ${Object.values(el.colors)[0]}" aria-label="Один из цветов товара ${Object.keys(el.colors)[0]}"></span>
                  <span class="type__color" style="background-color: ${Object.values(el.colors)[1]}" aria-label="Один из цветов товара ${Object.keys(el.colors)[1]}"></span>
                  <span class="type__color" style="background-color: ${Object.values(el.colors)[2]}" aria-label="Один из цветов товара ${Object.keys(el.colors)[2]}"></span>
                </div>
              </li>`;
          }
        }
      }
      return data;
    })
    .then((data) => {
      let titles = document.querySelectorAll('.type__subtitle');
      titles.forEach((title) => {
        $clamp(title, { clamp: 1 });
      });

      document.querySelectorAll('.type__element').forEach((e) => {
        e.addEventListener('click', function (e) {
          // Клик по глазику
          if (e.target.tagName == 'A') {
            let item = e.target.parentElement.closest('.type__item');
            let parent = e.target.parentElement.closest('.type__element');
            let text = parent.querySelector('.type__title').textContent;
            console.log(text);
            localStorage.setItem('item', JSON.stringify({ code: item.getAttribute('data-code'), title: text }));
          }
          // Клик по "Все товары"
          else if (e.target.parentElement.tagName == 'SPAN' && e.target.parentElement.classList.contains('type__all')) {
            let parent = e.target.parentElement.closest('.type__element');
            let text = parent.querySelector('.type__title').textContent;
            localStorage.setItem('category', JSON.stringify({ title: text }));
          }
        });
      });
      return data;
    })
}

if (lists) {
  productRender(listsQuantity);
}
