import {
  getStorageItem,
  saveToLocalStorage,
} from "./libs/localStorageHelper.js";

let addToCartBtn = document.querySelectorAll(".addToCartBtn");

addToCartBtn.forEach((element) => {
  element.onclick = function (element) {
    let localStorageObject = {
      id: element.dataset.id,
      title: element.dataset.title,
      price: element.dataset.price,
      image: element.dataset.image_url,
      description: element.dataset.description,
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
