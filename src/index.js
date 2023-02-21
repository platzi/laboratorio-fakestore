import { card } from "./components/card";
import { itemsListSection } from "./components/items-list-section";
import { limitMessage } from "./components/limit-message";

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products';

const limit = 10;

let storePagination = 5;

localStorage.setItem('pagination', storePagination);

const pagination = (offset) => {
  return `?offset=${offset}&limit=${limit}`
}

const getData = async (api) => {

  try {
    const response = await fetch(api);
    const data = await response.json();
    
    const output = data.map(product => card(product)).join('');
    $app.appendChild(itemsListSection(output));

  } catch {
    (error => console.log(error));
  }
}

const loadData = async (pages) => {
  await getData(`${API}${pagination(pages)}`);
  localStorage.setItem('pagination', storePagination);
  storePagination += limit;
}

const intersectionObserver = new IntersectionObserver(entries => {
  
  const getPagination = JSON.parse(localStorage.getItem('pagination'));
  
  entries.filter(entry => {
    if (entry.isIntersecting) {
      loadData(getPagination);
    }
  })
  
  if (getPagination > 200) {
    $app.appendChild(limitMessage());
    intersectionObserver.unobserve($observe);
  }

}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);