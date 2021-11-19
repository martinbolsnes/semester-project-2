export function renderCards(productsToRender) {
  const productsCards = document.querySelector(".products--cards");
  productsCards.innerHTML = "";

  productsToRender.forEach(function (element) {
    productsCards.innerHTML += `<div class="col-lg-4 col-md-6 col-6">
        <div class="card h-100">
        <img src="${element.image_url}" class="card-img-top" alt="${element.title}">
        <div class="hoverText_container">
        <h2 class="hoverText">view more</h2></div>
        <div class="card-body">
          <p class="card-text card-text-title">${element.title}</p>
          <p class="card-text card-text-price">${element.price} $</p>
        </div>
      </div>
      </div>`;
  });
}
