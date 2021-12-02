import {
  getStorageItem,
  saveToLocalStorage,
} from "./libs/localStorageHelper.js";

let cartObjects = getStorageItem("cartObjects");
let cartItems = document.querySelector(".cart_objects");

if (cartObjects === undefined || cartObjects.length === 0) {
  document.querySelector(".cart_objects").innerHTML += `<div>
    <h4>Your cart is empty</h4></div>`;
  document.querySelector(".checkoutBtn").classList.add("disabled");
}
console.log(cartObjects);

cartObjects.forEach((element) => {
  document.querySelector(".checkoutBtn").classList.remove("disabled");
  document.querySelector(".cart_objects").innerHTML += `
        <div class="card cartCard">
        <img src="${element.image_url}" class="card-img-top cartCard-img" alt="${element.title}">
        <div class="card-body cartCard-body">
        <a href="details.html?id=${element.id}"><p class="card-text card-text-title">${element.title}</p></a>
        <button class="removeBtn" data-id="${element.id}" data-title="${element.title}" data-image_url="${element.image_url}" data-price="${element.price}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b65242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></button>  
        <p class="card-text card-text-price">$ ${element.price}</p>
        </div>
      </div>`;

  let removeBtns = document.querySelectorAll(".removeBtn");
  console.log(removeBtns);

  removeBtns.forEach(function (element) {
    element.onclick = function () {
      let localStorageObject = {
        id: element.dataset.id,
        title: element.dataset.title,
        price: element.dataset.price,
        image_url: element.dataset.image_url,
      };

      let cartObjects = getStorageItem("cartObjects");

      let removedElementArray = cartObjects.filter(
        (productObject) => productObject.id !== localStorageObject.id
      );
      saveToLocalStorage("cartObjects", removedElementArray);
    };
  });
});

const sumItems = () => {
  let sum = 0;
  cartObjects.forEach(function (item) {
    let calculation = parseInt(item.price);
    sum += calculation;
    document.querySelector(".totalPrice").innerHTML = "$ " + sum;
  });
  console.log(sum);
};
sumItems();
