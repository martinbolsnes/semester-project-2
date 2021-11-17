export function renderProducts(productsToRender) {
  const featuredCards = document.querySelector(".featured--cards");
  featuredCards.innerHTML = "";

  productsToRender.forEach(function (element) {
    featuredCards.innerHTML += `<div class="col">
        <div class="card h-100">
        <img src="${element.image_url}" class="card-img-top" alt="${element.title}">
        <div class="card-body">
          <p class="card-text card-text-title">${element.title}</p>
          <p class="card-text card-text-price">${element.price} $</p>
        </div>
      </div>
      </div>`;
  });
}
