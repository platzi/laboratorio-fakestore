import "../public/styles.css"
const $app = document.getElementById("app");
const $observe = document.getElementById("observe");
const API = "https://api.escuelajs.co/api/v1/products";

window.localStorage.setItem("pagination", 0);
const ITEMS_PROD_PAGE = 10;

const getData = async (api) => {
  const pagination = parseInt(window.localStorage.getItem("pagination"));

  try {
    const response = await fetch(api);
    const products = await response.json();

    //map update to each product, equal length
    //filter, return boolean , return NOT HTML
    let currentPageProducts = products
      .filter((product) => product.id > 5)
      .slice(pagination, pagination + ITEMS_PROD_PAGE);

    let output = currentPageProducts.map((product) => {
      // template
      return `<article class="Card"><img src="${product.images}" alt=""><h2>${product.title}</h2></article>`;
    });
    const newItem = document.createElement("section");
    newItem.classList.add("Items");
    //OUTPUT IS AN ARRAY, JOIN TO CONVERT TO STRING COMPLETE
    newItem.innerHTML = output.join("");
    $app.appendChild(newItem);
  } catch (error) {
    console.log(error);
  }
};

const loadData = async () => {
  const pagination = parseInt(window.localStorage.getItem("pagination"));
  window.localStorage.setItem("pagination", pagination + ITEMS_PROD_PAGE);
  await getData(API);

  const lengthProducts = document.querySelectorAll(".Card").length;
  if (lengthProducts === 180) {
    //products with images
    const message = document.createElement("div");
    message.textContent = "Todos los productos Obtenidos";
    message.style.fontSize = "20px";
    $app.appendChild(message);
    intersectionObserver.unobserve($observe);
  }
};

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // console.log(entries); //print 2 arrays(arr of MAIN , arr of BODY=root), according JERARQUIA (HTML: observe > MAIN > BODY)
      if (entry.isIntersecting) {
        loadData();
      }
    });
  },
  {
    rootMargin: "0px 0px 100% 0px",
  }
);

intersectionObserver.observe($observe);

// "beforeunload" se dispara antes del evento "unload"
window.addEventListener("beforeunload", () => {
  //se activa antes de que la página se cierre o se recargue
  localStorage.removeItem("pagination");
});



// window.addEventListener("DOMContentLoaded", loadData, false);
