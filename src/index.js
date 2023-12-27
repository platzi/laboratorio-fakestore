const $app = document.getElementById("app");
const $observe = document.getElementById("observe");
const API = process.env.API_URL;

import { card } from "@templates/card";
import "@styles/styles.css";

localStorage.setItem("pagination", 5);
let firstLoad = true;

window.onbeforeunload = () => {
  localStorage.removeItem("pagination");
};

const getData = async (api) => {
  const res = await fetch(api);
  const products = await res.json();

  if (products.length) {
    const output = products.map((product) => card(product));
    let newItem = document.createElement("section");
    newItem.classList.add("Items");
    newItem.innerHTML = output.join(" ");
    $app.appendChild(newItem);
  } else {
    intersectionObserver.unobserve($observe);
    const msg = document.createElement("p");
    msg.textContent = "Todos los productos Obtenidos";
    $observe.appendChild(msg);
  }
};

const loadData = async () => {
  if (firstLoad) {
    firstLoad = false;
  } else {
    localStorage.setItem(
      "pagination",
      Number(localStorage.getItem("pagination")) + 10
    );
  }
  await getData(`${API}?offset=${localStorage.getItem("pagination")}&limit=10`);
};

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadData();
    }
  },
  {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  }
);

intersectionObserver.observe($observe);