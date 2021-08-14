const categoriesList = document.querySelector('.categories-list-js');

if (categoriesList) {
  categoriesList.innerHTML = '';

  fetch("../data/data.json")
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