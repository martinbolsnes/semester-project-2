import { BASE_URL } from "./configs/configs.js";
import { header } from "./configs/header.js";

async function getProductInfoDashboard() {
  let response = await axios.get(`${BASE_URL}/products`);
  let apiResults = response.data;
  console.log(apiResults);

  apiResults.forEach(({ id, title, price }, iteration) => {
    document.querySelector(".table-body").innerHTML += `
          <tr>
            <th scope="row">${iteration + 1}</th>
            <td>${id}</td>
            <td>${title}</td>
            <td>${price}</td>
            <td><a href="editProduct.html?id=${id}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a></td>
            <td><button class="removeBtn" data-id="${id}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B65242" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button></td>
          </tr>`;
  });

  let deleteBtns = document.querySelectorAll(".removeBtn");

  deleteBtns.forEach(function (deleteBtn) {
    deleteBtn.onclick = async function () {
      let confirmation = window.confirm("Are you sure you want to delete?");
      if (confirmation === true) {
        let response = await axios.delete(
          `${BASE_URL}/products/${deleteBtn.dataset.id}`,
          header
        );
        window.location.reload();
      }
    };
  });
}

getProductInfoDashboard();
