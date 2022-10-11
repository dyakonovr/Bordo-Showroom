var storageData;
let code, title, sizes;

if (localStorage.getItem('item')) {
  window.addEventListener('storage', function () {
    storageData = JSON.parse(localStorage.getItem('item'));
    code = storageData.code;
    title = storageData.title;
  });
}
else {
  storageData = [];
}

let itemSection = document.querySelector('.item__upper');

if (itemSection) {
  console.log(storageData, code, title);

  itemSection.innerHTML = '';
  const loadItem = (code, title) => {
    fetch("https://6341ca7920f1f9d79979deb0.mockapi.io/product_collections")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        data.forEach(el => {
          if (el.title == title) {
            let currTitle = el.title;
            el.products.forEach(el => {
              if (el.chars.Артикул == code) {
                sizes = el.sizes;
                console.log(el);

                const preview = el.gallery.map((image, idx) => {
                  return `
                <li class="item__prev" data-image-index="${idx}">
                  <img src="${image}" alt="${el.title} фото ${idx}">
                </li>
              `;
                });

                const sliderImgs = el.gallery.map((image, idx) => {
                  return `
                <div class="swiper-slide">
                  <img src="${image}" alt="${el.title} фото ${idx}">
                </div>
              `;
                });

                itemSection.innerHTML += `
                  <a href="category.html" class="item__category">&larr;&nbsp;<span class="category">${currTitle}</span></a>
                  <ul class="item__preview">
                    ${preview.join('')}
                  </ul>
                  <div class="item-swiper">
                    <div class="item-swiper__container">
                      <div class="swiper-wrapper">
                        ${sliderImgs.join('')}
                        <div class="swiper-pagination"></div>
                      </div>
                    </div>
                  </div>
                  <div class="item__right">
                    <span class="item__art art-text">АРТ <span class="art">6789765432</span></span>
                    <strong class="item__name name">${el.title}</strong>
                    <span class="item__price"><span class="price">${normalPrice(el.price)}</span> &#8381;</span>
                    <div class="item__colors">
                      <button type="button" class="item__color item__color--active" data-color="${Object.values(el.colors)[0]}" style="background-color: ${Object.values(el.colors)[0]}"></button>
                      <button type="button" class="item__color" data-color="${Object.values(el.colors)[1]}" style="background-color: ${Object.values(el.colors)[1]}"></button>
                      <button type="button" class="item__color" data-color="${Object.values(el.colors)[2]}" style="background-color: ${Object.values(el.colors)[2]}"></button>
                    </div>
                    <p class="item__descr">Цвет: <span>баклажановый</span></p>
                    <select class="item__select custom-select select">
                      <option class="item__option custom-option" hidden="hidden">Выбрать размер</option>
                      <option value="S" class="item__option custom-option">${el.sizes[0]}</option>
                      <option value="XS" class="item__option custom-option">${el.sizes[1]}</option>
                      <option value="L" class="item__option custom-option">${el.sizes[2]}</option>
                      <option value="XL" class="item__option custom-option">${el.sizes[3]}</option>
                    </select>
                    <p class="item__text">Подберите свой точный размер</p>
                    <div class="item__btns">
                      <button class="item__btn item__btn--buy add-to-cart-btn">В корзину</button>
                      <button class="item__btn item__btn--like add-to-favorite-btn"></button>
                    </div>
                    <a class="item__share" href="https://vk.com/share.php?url=http://youtube.com" target="_blank">Поделиться Вконтакте</a>
                    <a href="#" class="item__share">Поделиться в Instagram</a>
                    <ul class="item__list">
                      <li class="item__details">Детали:</li>
                      <li class="item__property">${Object.keys(el.chars)[0]}: <span class="code">${Object.values(el.chars)[0]}</span></li>
                      <li class="item__property">${Object.keys(el.chars)[1]}: ${Object.values(el.chars)[1]}</li>
                      <li class="item__property">${Object.keys(el.chars)[2]}: ${Object.values(el.chars)[2]}</li>
                      <li class="item__property">${Object.keys(el.chars)[3]} ${Object.values(el.chars)[3]}</li>
                    </ul>
                  </div>
                `;
              }
            })
          }
        });
        const itemSwiper = new Swiper('.item-swiper__container', {
          slidesPerView: 'auto', spaceBetween: 20,
        });
        let previewBlock = document.querySelector('.item__preview');
        previewBlock.addEventListener('click', function (e) {
          if (e.target.tagName == 'IMG') {
            let li = e.target.parentElement;
            itemSwiper.slideTo(li.getAttribute('data-image-index'));
          }
        })
        return data;
      })
      .then((data) => {
        colorPicker(data);
        addToFavorite();
        addToCart();
        goToCategory();
      })
  }

  const colorPicker = (data) => {
    let itemColor = document.querySelectorAll('.item__color');
    itemColor.forEach((item) => {
      item.addEventListener('click', function () {
        let btnsGroup = item.parentElement;
        btnsGroup.querySelectorAll('.item__color').forEach((item) => {
          item.classList.remove('item__color--active');
        })
        item.classList.add('item__color--active');
        data.forEach((el) => {
          if (el.title == title) {
            el.products.forEach((el) => {
              if (el.chars.Артикул == code) {
                let currColor = item.getAttribute('data-color');
                for (let i = 0; i < Object.values(el.colors).length; i++) {
                  const color = Object.values(el.colors)[i];
                  if (color == currColor) {
                    btnsGroup.parentElement.querySelector('.item__descr span').textContent = Object.keys(el.colors)[i];
                  }
                }
              }
            });
          }
        });
      });
    })
  }

  const addToFavorite = () => {
    const category = document.querySelector('.category').textContent;
    const favBtn = document.querySelector('.add-to-favorite-btn');
    const parent = document.querySelector('.item__right');
    favBtn.addEventListener('click', function () {
      favBtn.classList.add('btn--disabled');
      let arr = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : [];
      arr.push({
        category,
        title: parent.querySelector('.item__name').textContent,
        art: parent.querySelector('.art').textContent,
        code: parent.querySelector('.code').textContent,
      });
      localStorage.setItem('favorite', JSON.stringify(arr));
    });
  }

  const addToCart = () => {
    const addBtn = document.querySelector('.add-to-cart-btn');
    const category = document.querySelector('.category').textContent;
    const select = document.querySelector('.select');
    const parent = document.querySelector('.item__right');
    addBtn.addEventListener('click', function () {
      if (select.selectedIndex != 0) {
        addBtn.classList.add('btn--disabled');
        addBtn.textContent = 'Добавлено';
        let arr = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        let obj = {
          category,
          size: select.selectedOptions[0].textContent,
          title: parent.querySelector('.item__name').textContent,
          art: parent.querySelector('.art').textContent,
          code: parent.querySelector('.code').textContent,
        };
        console.log(obj);
        arr.push(obj);
        localStorage.setItem('cart', JSON.stringify(arr));
      } else {
        alert("Выберите подходящий размер");
      }
    });
  }

  const goToCategory = function () {
    const category = document.querySelector('.category');
    category.addEventListener('click', function (e) {
      const title = e.target.textContent;
      localStorage.setItem('category', JSON.stringify({ title }));
    });
  };

  loadItem(code, title);
}
