export function renderCards(productsToRender) {
  const productsCards = document.querySelector(".products--cards");
  productsCards.innerHTML = "";

  productsToRender.forEach(function (element) {
    productsCards.innerHTML += `<div class="col-lg-4 col-md-6 col-6">
        <div class="card h-100">
        <img src="${element.image_url}" class="card-img-top" alt="${element.title}">
        <div class="card-body">
          <p class="card-text card-text-title">${element.title}</p>
          <p class="card-text card-text-price">$ ${element.price}</p>
        </div>
        <a href="details.html?id=${element.id}" class="btn btn-primary streched-link">view more</a>
      </div>
      </div>`;
  });
}
