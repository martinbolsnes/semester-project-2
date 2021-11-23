import { BASE_URL } from "./configs/configs.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getProduct(productId) {
  try {
    const response = await axios.get(`${BASE_URL}/products/` + productId);
    let apiResults = response.data;
    console.log(apiResults);

    document.title = apiResults.title + " - amenity.";

    document.querySelector(
      ".details__img--container"
    ).style.backgroundImage = `url('${apiResults.image_url}')`;
    document.querySelector(
      ".details__heading"
    ).innerHTML = `${apiResults.title}`;
    document.querySelector(
      ".details__price"
    ).innerHTML = `$ ${apiResults.price}`;
    document.querySelector(
      ".details__description"
    ).innerHTML = `${apiResults.description}`;
  } catch {}
}
getProduct(id);
