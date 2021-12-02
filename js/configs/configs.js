export const BASE_URL = `https://semester-project2-api.herokuapp.com`;

export const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage
      .getItem("jwt")
      .replace(/^"(.*)"$/, "$1")}`,
  },
};
