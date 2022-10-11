const orderRight = document.querySelector('.order__right');

if (orderRight) {
  const { total }  = localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0;
  const discount = total >= 5000 ? 0 : 500;
  const result = total + discount
  const code = `
    <div class="order__grid">
      <div class="order__group">
        <strong class="order__text">Стоимость</strong><span class="price-js">${normalPrice(total)}&nbsp;&#8381;</span>
      </div>
      <div class="order__group">
        <strong class="order__text">Скидка</strong><span class="discount-js">0&nbsp;&#8381;</span>
      </div>
      <div class="order__group">
        <strong class="order__text">Доставка</strong><span class="delivery-js">${normalPrice(discount)}&nbsp;&#8381;</span>
      </div>
      <div class="order__group">
        <strong class="order__text">Итого к оплате</strong><span class="total-js">${normalPrice(result)}&nbsp;&#8381;</span>
      </div>
    </div>
  `;
  orderRight.insertAdjacentHTML('afterbegin', code);
}