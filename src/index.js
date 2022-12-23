import { getLocalStorageEntry, updateLocalStorageEntry } from './services/localstorage.services';
import { getProductsFromPage } from './services/products.services';
import { createProductCard } from './view/products.ui';

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');

updateLocalStorageEntry('pagination', 0);
let currentPage = getLocalStorageEntry('pagination') || 0;

const renderProducts = async () => {
  const [error, products] = await getProductsFromPage(currentPage, 10);

  if (!error) {
    products.forEach((product) => {
      $app.innerHTML += createProductCard(product);
    });
  } else {
    console.error(error);
  }
};

const ObserverTrigger = (entries, _) => {
  const { isIntersecting } = entries[0];

  if (isIntersecting) {
    currentPage++;
    updateLocalStorageEntry('pagination', currentPage);
    renderProducts(currentPage, 10);
  }
};

const Observer = new IntersectionObserver(ObserverTrigger, {
  treshold: 0.5,
});

Observer.observe($observe);
