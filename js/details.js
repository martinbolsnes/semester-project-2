import { BASE_URL } from "./configs/configs.js";
import {
  getStorageItem,
  saveToLocalStorage,
} from "./libs/localStorageHelper.js";
import alert from "./components/alert.js";

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

    document.querySelector(
      ".btnDiv"
    ).innerHTML = `<button type="button" class="btn primary-btn addToCartBtn" data-id="${apiResults.id}" data-title="${apiResults.title}" data-image_url="${apiResults.image_url}" data-price="${apiResults.price}">
    Add to cart
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart cartIcon"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path
        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      ></path>
    </svg>
  </button>`;

    let addToCartBtn = document.querySelectorAll(".addToCartBtn");

    console.log(addToCartBtn);

    addToCartBtn.forEach((element) => {
      element.onclick = function () {
        element.classList.add("disabled");
        alert("alert-success", "Item added to cart");
        let localStorageObject = {
          id: element.dataset.id,
          title: element.dataset.title,
          price: element.dataset.price,
          image_url: element.dataset.image_url,
        };

        let cartObjects = getStorageItem("cartObjects");

        let isInStorage = cartObjects.find(
          (productObject) => productObject.id === localStorageObject.id
        );

        if (isInStorage === undefined) {
          cartObjects.push(localStorageObject);
          saveToLocalStorage("cartObjects", cartObjects);
        } else {
          let removedElementArray = cartObjects.filter(
            (productObject) => productObject.id !== localStorageObject.id
          );
          saveToLocalStorage("cartObjects", removedElementArray);
        }
      };
    });
  } catch {}
}
getProduct(id);
