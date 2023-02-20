import { card } from "./components/card";

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products';

const pagination = (offset) => {
  return `?offset=${offset}&limit=10`
}

let storeProductsLength = 0;

window.localStorage.setItem('pagination', storeProductsLength);

const getData = api => {
  fetch(api)
    .then(response => response.json())
    .then(response => {
      let products = response;
      let output = products.map(product => card(product));
      let newItem = document.createElement('section');
      newItem.classList.add('Items');
      newItem.innerHTML = output;
      $app.appendChild(newItem);
      localStorage.setItem('pagination', JSON.parse(localStorage.getItem('pagination')) + products.length)
      console.log(localStorage.getItem('pagination'));
    })
    .catch(error => console.log(error));
}

const loadData = (pages) => {
  getData(`${API}${pagination(pages)}`);
}


const intersectionObserver = new IntersectionObserver(entries => {
  // logic...
  
  const pagination = JSON.parse(localStorage.getItem('pagination'));

  entries.filter(entry => {
    if (entry.isIntersecting) {
      console.log(entries);
      loadData(pagination);
    }
  })

  if (pagination > 50) {
    const limit = document.createElement('p');
    limit.textContent = 'Todos los productos Obtenidos';
    $app.appendChild(limit);
    intersectionObserver.unobserve($observe);
  }

}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);

loadData(5);