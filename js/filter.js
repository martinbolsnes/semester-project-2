import { renderCards } from "./components/renderCards.js";

export function searchProducts(products) {
  const search = document.querySelector(".searchInput");

  search.onkeyup = function (event) {
    console.log(search.value);
    const searchValue = event.target.value.trim().toLowerCase();

    let filteredProducts = products.filter(function (product) {
      if (product.title.toLowerCase().includes(searchValue)) {
        return true;
      } else {
      }
    });

    renderCards(filteredProducts);
  };
}
