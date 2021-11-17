export const BASE_URL = `https://semester-project2-api.herokuapp.com`;

export const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
};
