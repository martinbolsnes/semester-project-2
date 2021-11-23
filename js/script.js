import { BASE_URL } from "./configs/configs.js";
import alert from "./components/alert.js";

const featuredCards = document.querySelector(".featured--cards");

async function getFeaturedCards() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    let apiResults = response.data;
    console.log(apiResults);

    for (let i = 0; i < apiResults.length; i++) {
      if (apiResults[i].featured === true) {
        featuredCards.innerHTML += `<div class="col-lg-4 col-md-6 col-6">
        <div class="card h-100">
        <img src="${apiResults[i].image_url}" class="card-img-top" alt="${apiResults[i].title}">
        <div class="card-body">
          <p class="card-text card-text-title">${apiResults[i].title}</p>
          <p class="card-text card-text-price">$ ${apiResults[i].price}</p>
        </div>
        <a href="details.html?id=${apiResults[i].id}" class="btn btn-secondary streched-link">view more</a>
      </div>
      </div>`;
      }
    }
  } catch {
    alert("alert-danger", "Connection error");
  }
}

getFeaturedCards();
