import { renderProducts } from "./components/renderCards.js";
import { BASE_URL } from "./configs/configs.js";

async function getFeaturedCards() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    let apiResults = response.data;
    console.log(apiResults);

    renderProducts(apiResults);
  } catch {}
}

getFeaturedCards();
