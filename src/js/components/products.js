const lists = document.querySelector('#lists');
let listsQuantity = 11;
if (location.href.split("/").slice(-1)[0] == 'item.html') listsQuantity = 3;

const productRender = (quanL) => {
  lists.innerHTML = '';
  fetch("../data/data.json")
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
              <span class="type__title">${curr.title}</span>
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
              <img src="${el.mainImage}" alt="${el.title}" class="type__img">
              <div class="type__btns">
                <a href="item.html" class="type__btn type__btn--watch">
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
                <button type="button" class="type__btn type__btn--buy add-to-cart-btn">
                  <svg data-role="buy" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"
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
          if (e.target.parentElement.tagName == 'A') {
            console.log(e.target.parentElement);
            let item = e.target.parentElement.closest('.type__item');
            let parent = e.target.parentElement.closest('.type__element');
            let text = parent.querySelector('.type__title').textContent;
            console.log(text);
            localStorage.setItem('current_item', JSON.stringify({ code: item.getAttribute('data-code'), title: text }))
          }

          else if (e.target.parentElement.tagName == 'SPAN') {
            let parent = e.target.parentElement.closest('.type__element');
            let text = parent.querySelector('.type__title').textContent;
            localStorage.setItem('current_category', JSON.stringify({ title: text }))
          }
        });
      });
      return data;
    })
    .then((data) => {
      addToCart(data);
    })


  const addToCart = function (data) {
    let btnsBuy = document.querySelectorAll('.add-to-cart-btn');
    btnsBuy.forEach((btnBuy) => {
      btnBuy.addEventListener('click', function (e) {
        let item = this.parentElement.closest('.type__item');
        let parent = this.parentElement.closest('.type__element');
        let title = parent.querySelector('.type__title').textContent;
        let code = item.dataset.code;
        data.forEach((el) => {
          if (el.title == title) {
            el.products.forEach((prod) => {
              if (prod.chars.Артикул == code) {
                let cartObj = {
                  title: prod.title,
                  price: prod.price,
                  mainImage: prod.mainImage,
                  sizes: prod.sizes,
                  code: prod.chars.Артикул,
                  quantity: 1
                };
                let arr = localStorage.getItem('current_cart') ? JSON.parse(localStorage.getItem('current_cart')) : [];
                if (arr.length == 0) {
                  console.log('empty');
                  arr.push(cartObj);
                } else {
                  console.log('not empty');
                  arr.forEach((el) => {
                    console.log('foreach', el);
                    if (el.code == prod.chars.Артикул) {
                      el.quantity += 1;
                      console.log("+1", el);
                    }
                    else {
                      console.log('push');
                      arr.push(cartObj);
                    }
                  });
                  console.log(arr);
                }
                localStorage.setItem('current_cart', JSON.stringify(arr));
              }
            });
          }
        });
      });
    });
  }
}

if (lists) {
  productRender(listsQuantity);
}