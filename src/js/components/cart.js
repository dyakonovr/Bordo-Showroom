const cartSection = document.querySelector('.cart__list');

const cartLogic = function () {
  let itemsArr;
  (localStorage.getItem('current_cart')) ? itemsArr = JSON.parse(localStorage.getItem('current_cart')) : itemsArr = [];

  const emptyCheck = (storage) => {
    if (storage.length == 0) {
      cartSection.innerHTML += `<li class="empty">Тут пусто..</li>`;
      let btn = document.querySelector('.cart__btn');
      btn.classList.add('btn--disabled');
      btn.setAttribute('disabled', 'disabled');
    }
  };

  const itemRender = (itemsArr) => {
    for (let i = 0; i < itemsArr.length; i++) {
      const item = itemsArr[i];
      console.log(item);
      cartSection.innerHTML += `
            <li class="cart-item" data-index="${item.code}">
              <img src="${item.mainImage}" alt="" class="cart-item__img">
              <div class="cart-item__text">
                <span class="cart-item__art art-text">АРТ 6789765432</span>
                <p class="cart-item__name">${item.title}</p>
              </div>
              <span class="cart-item__price price">${item.price}&nbsp;&#8381;</span>
              <select name="sizes" class="cart-item__select custom-select">
                <option value="XS" class="cart-item__option custom-option">${item.sizes[0]}</option>
                <option value="XS" class="cart-item__option custom-option">${item.sizes[1]}</option>
                <option value="XS" class="cart-item__option custom-option">${item.sizes[2]}</option>
                <option value="XS" class="cart-item__option custom-option">${item.sizes[3]}</option>
              </select>
              <div class="cart-item__counter">
                <button class="cart-item__btn cart-item__btn--minus btn-minus"></button>
                <input type="text" class="cart-item__number input-number" value="${item.quantity}" disabled="disabled" />
                <button class="cart-item__btn cart-item__btn--plus btn-plus"></button>
              </div>
              <button type="button" class="cart-item__delete btn--delete btn-delete-js"></button>
            </li>
        `;
    }
  }

  cartSection.innerHTML = '';
  emptyCheck(itemsArr);
  itemRender(itemsArr);

  let plusBtns = document.querySelectorAll('.btn-plus');
  let minusBtns = document.querySelectorAll('.btn-minus');
  let deleteBtns = document.querySelectorAll('.btn-delete-js');

  plusBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      let input = btn.parentElement.querySelector('.input-number');
      let quantity = input.getAttribute('value');
      (quantity >= 1) ? input.setAttribute('value', ++quantity) : input.setAttribute('value', quantity);
    });
  });

  minusBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      let input = btn.parentElement.querySelector('.input-number');
      let quantity = input.getAttribute('value');
      (quantity >= 2) ? input.setAttribute('value', --quantity) : input.setAttribute('value', quantity);
    });
  });

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      let parent = btn.parentElement;
      let code = parent.dataset.index;
      parent.remove();
      itemsArr.forEach((el) => {
        if (el.code == code) {
          let index = itemsArr.indexOf(el);
          delete itemsArr[index];
          itemsArr = itemsArr.filter(n => n);
          localStorage.setItem('current_cart', JSON.stringify(itemsArr));
        }
      });
      emptyCheck(itemsArr);
    });
  });
}

if (cartSection) cartLogic();