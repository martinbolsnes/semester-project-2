import { renderCards } from "./components/renderCards.js";
import { searchProducts } from "./filter.js";
import { BASE_URL } from "./configs/configs.js";

async function getProductCards() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    let apiResults = response.data;
    console.log(apiResults);

    renderCards(apiResults);
    searchProducts(apiResults);
  } catch {}
}

getProductCards();
