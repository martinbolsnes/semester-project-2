import alert from "./components/alert.js";
import { BASE_URL } from "./configs/configs.js";
import { header } from "./configs/header.js";

let productForm = document.querySelector(".addForm");

productForm.onsubmit = async function (event) {
  event.preventDefault();
  const title = document.querySelector("#titleInput");
  const price = document.querySelector("#priceInput");
  const description = document.querySelector("#descriptionInput");
  const image = document.querySelector("#imageInput");
  const checkbox = document.querySelector("#defaultCheck1");
  const isFeatured = checkbox.checked;

  try {
    let newProduct = {
      title: title.value,
      price: price.value,
      description: description.value,
      image_url: image.value,
      featured: checkbox.checked,
    };

    let response = await axios.post(`${BASE_URL}/products`, newProduct, header);
    alert("alert-success", "Product has been added succsessfully");
    title.value = "";
    price.value = "";
    description.value = "";
    image_url.value = "";
    isFeatured = "";
  } catch {}
};
