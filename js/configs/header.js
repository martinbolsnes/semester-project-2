export const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage
      .getItem("jwt")
      .replace(/^"(.*)"$/, "$1")}`,
  },
};
