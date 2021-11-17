import { BASE_URL } from "../configs/configs.js";

export async function getHeroBanner() {
  try {
    const response = await axios.get(`${BASE_URL}/hero-banner`);
    let heroResult = response.data;
    console.log(heroResult);

    document.querySelector(
      ".hero__container"
    ).style.backgroundImage = `url(${heroResult.image_url})`;
  } catch {}
}

getHeroBanner();
