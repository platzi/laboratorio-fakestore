import { card } from "./components/card";
import { itemsListSection } from "./components/items-list-section";
import { limitMessage } from "./components/limit-message";

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products';

const limit = 10;

const pagination = (offset) => {
  return `?offset=${offset}&limit=${limit}`
}

let storePagination = 5;

localStorage.setItem('pagination', storePagination);

const getData = api => {
  fetch(api)
    .then(response => response.json())
    .then(response => {
      let products = response;
      let output = products.map(product => card(product));
      $app.appendChild(itemsListSection(output));
      console.log(localStorage.getItem('pagination'));
    })
    .catch(error => console.log(error));
  }

const loadData = (pages) => {
  getData(`${API}${pagination(pages)}`);
  localStorage.setItem('pagination', storePagination);
  storePagination += limit;
}

const intersectionObserver = new IntersectionObserver(entries => {
  
  const pagination = JSON.parse(localStorage.getItem('pagination'));
  
  entries.filter(entry => {
    if (entry.isIntersecting) {
      loadData(pagination);
    }
  })
  
  if (pagination > 20) {
    $app.appendChild(limitMessage());
    intersectionObserver.unobserve($observe);
  }

}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);