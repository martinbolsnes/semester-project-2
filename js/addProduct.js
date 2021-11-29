import alert from "./components/alert.js";
import { BASE_URL, header } from "./configs/configs.js";

let productForm = document.querySelector(".addForm");

productForm.onsubmit = async function (event) {
  event.preventDefault();
  const title = document.querySelector("#titleInput");
  const price = document.querySelector("#priceInput");
  const description = document.querySelector("#descriptionInput");
  const image = document.querySelector("#imageInput");

  try {
    let newProduct = {
      title: title.value,
      price: price.value,
      description: description.value,
      image_url: image.value,
    };

    let response = await axios.post(`${BASE_URL}/products`, newProduct, header);
    alert("alert-succsess", "Product has been added succsessfully");
    title.value = "";
    price.value = "";
    description.value = "";
    image_url.value = "";
  } catch {}
};
