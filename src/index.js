const $app = document.getElementById("app");
const $observe = document.getElementById("observe");
const API = "https://api.escuelajs.co/api/v1/products";

import "./styles/styles.css";
import { card } from "./templates/card";

console.log("Server Working!");

const getData = (api) => {
  fetch(api)
    .then((response) => response.json())
    .then((response) => {
      let products = response;
      let output = products.map((product) => card(product));
      let newItem = document.createElement("section");
      newItem.classList.add("Item");
      newItem.innerHTML = output.join(" ");
      $app.appendChild(newItem);
    })
    .catch((error) => console.log(error));
};

const loadData = () => {
  getData(API);
};

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    // logic...
  },
  {
    rootMargin: "0px 0px 100% 0px",
  }
);

intersectionObserver.observe($observe);

loadData();
