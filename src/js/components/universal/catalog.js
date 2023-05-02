const categoriesList = document.querySelector('.categories-list-js');

console.log(categoriesList);

if (categoriesList) {
  categoriesList.innerHTML = '';

  fetch("https://6341ca7920f1f9d79979deb0.mockapi.io/product_collections")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      for (let category of data) {
        categoriesList.innerHTML += `<li class="roster__item"><a href="category.html" class="roster__link">${category.title}</a></li>`;
      }
    })
    .then(() => {
      categoriesList.addEventListener('click', function (e) {
        const title = e.target.textContent;
        localStorage.setItem('category', JSON.stringify({ title }));
      });
    })
}
