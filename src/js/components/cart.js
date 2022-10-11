const cartSection = document.querySelector('.cart__list');

const cartRender = (arr) => {
  fetch("https://6341ca7920f1f9d79979deb0.mockapi.io/product_collections")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      data.forEach((el) => {
        arr.forEach((element) => {
          if (element.category == el.title) {
            el.products.forEach((prod) => {
              if (prod.title == element.title) {
                console.log(prod);
                const prodSizes = prod.sizes;
                const currSize = prodSizes.indexOf(element.size);
                [prodSizes[0], prodSizes[currSize]] = [prodSizes[currSize], prodSizes[0]];
                cartSection.innerHTML += `
                          <li class="cart-item" data-code="${prod.chars.Артикул}" data-category="${element.category}">
                            <img src="${prod.mainImage}" alt="${prod.title}" class="cart-item__img">
                            <div class="cart-item__text">
                              <span class="cart-item__art art-text">АРТ 6789765432</span>
                              <a href="item.html" class="cart-item__name name-js">${prod.title}</a>
                            </div>
                            <p class="cart-item__price"><span class="price" data-price="${prod.price}">${normalPrice(prod.price)}</span>&nbsp;&#8381;</p>
                            <select name="sizes" class="cart-item__select custom-select">
                              <option value="${prodSizes[0]}" class="cart-item__option custom-option">${prodSizes[0]}</option>
                              <option value="${prodSizes[1]}" class="cart-item__option custom-option">${prodSizes[1]}</option>
                              <option value="${prodSizes[2]}" class="cart-item__option custom-option">${prodSizes[2]}</option>
                              <option value="${prodSizes[3]}" class="cart-item__option custom-option">${prodSizes[3]}</option>
                            </select>
                            <div class="cart-item__counter">
                              <button class="cart-item__btn cart-item__btn--minus btn-minus"></button>
                              <input type="text" class="cart-item__number input-number" value="1" disabled="disabled" />
                              <button class="cart-item__btn cart-item__btn--plus btn-plus"></button>
                            </div>
                            <button type="button" class="cart-item__delete btn--delete btn-delete-js"></button>
                          </li>
                      `;
              }
            });
          }
        });
      })
      return arr;
    })
    .then((arr) => {
      deleteItem(arr);
      quantityChange();
      goToItem();
      goToOrder();
    })

  const quantityChange = function () {
    let plusBtns = document.querySelectorAll('.btn-plus');
    let minusBtns = document.querySelectorAll('.btn-minus');

    plusBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        let input = btn.parentElement.querySelector('.input-number');
        let quantity = input.getAttribute('value');
        (quantity >= 1) ? input.setAttribute('value', ++quantity) : input.setAttribute('value', quantity);
      });
    });

    minusBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        let input = btn.parentElement.querySelector('.input-number');
        let quantity = input.getAttribute('value');
        (quantity >= 2) ? input.setAttribute('value', --quantity) : input.setAttribute('value', quantity);
      });
    });
  }

  const deleteItem = function (itemsArr) {
    let deleteBtns = document.querySelectorAll('.btn-delete-js');
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        let parent = btn.parentElement;
        let code = parent.dataset.code;
        parent.remove();
        itemsArr.forEach((el) => {
          if (el.code == code) {
            let index = itemsArr.indexOf(el);
            delete itemsArr[index];
            itemsArr = itemsArr.filter(n => n);
            localStorage.setItem('cart', JSON.stringify(itemsArr));
          }
        });
        if (emptyCheck(itemsArr, cartSection)) {
          let btn = document.querySelector('.cart__btn');
          btn.classList.add('btn--disabled');
          btn.setAttribute('disabled', 'disabled');
        }
      });
    });
  }

  const goToItem = function () {
    const names = document.querySelectorAll('.name-js');
    names.forEach((name) => {
      name.addEventListener('click', function (e) {
        const item = e.target.closest('.cart-item');
        const code = item.dataset.code;
        const title = item.dataset.category;
        localStorage.setItem('item', JSON.stringify({ title, code }));
      });
    });
  }

  const goToOrder = function () {
    const btnToOrder = document.querySelector('.btn-order-js');
    btnToOrder.addEventListener('click', function () {
      const prices = document.querySelectorAll('.price');
      let total = 0;
      for (let price of prices) total += Number(price.dataset.price);
      localStorage.setItem('total', JSON.stringify({ total }));
    });
  }
}

const cartLogic = function () {
  let itemsArr;
  (localStorage.getItem('cart')) ? itemsArr = JSON.parse(localStorage.getItem('cart')) : itemsArr = [];

  cartSection.innerHTML = '';
  if (emptyCheck(itemsArr, cartSection)) {
    let btn = document.querySelector('.cart__btn');
    btn.classList.add('btn--disabled');
    btn.setAttribute('disabled', 'disabled');
  }
  cartRender(itemsArr);
}

if (cartSection) cartLogic();
