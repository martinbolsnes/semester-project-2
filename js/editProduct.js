import alert from "./components/alert.js";
import { BASE_URL } from "./configs/configs.js";
import { header } from "./configs/header.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

let title = document.querySelector("#titleInput");
let price = document.querySelector("#priceInput");
let description = document.querySelector("#descriptionInput");
let image = document.querySelector("#imageInput");
let form = document.querySelector(".editForm");

async function getSpecificProduct() {
  const response = await axios.get(`${BASE_URL}/products/${id}`);

  let product = response.data;
  title.value = product.title;
  price.value = product.price;
  description.value = product.description;
  image.value = product.image_url;
}

getSpecificProduct();

form.onsubmit = async function (event) {
  event.preventDefault();
  let updatedProduct = {
    title: title.value,
    price: price.value,
    description: description.value,
    image_url: image.value,
  };

  const response = await axios.put(
    `${BASE_URL}/products/${id}`,
    updatedProduct,
    header
  );

  alert("alert-success", "Product has been updated successfully");

  console.log(response);
};
