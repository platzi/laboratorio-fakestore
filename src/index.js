import { MAX_OFFSET } from './constants.config';
import { getLocalStorageEntry, updateLocalStorageEntry } from './services/localstorage.services';
import { getProductsFromPage } from './services/products.services';
import { createProductCard } from './view/products.ui';

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');

updateLocalStorageEntry('pagination', 5); // Start with the fifth item
let currentOffset = Number(getLocalStorageEntry('pagination')) || 5;

const renderProducts = async () => {
  const [error, products] = await getProductsFromPage(currentOffset, 10);

  if (!error) {
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('Items');

    products.forEach((product) => {
      productsContainer.innerHTML += createProductCard(product);
    });

    $app.appendChild(productsContainer);
  } else {
    console.error(error);
  }
};

const ObserverTrigger = (entries, _) => {
  const { isIntersecting } = entries[0];
  console.log('Observer', currentOffset);

  if (currentOffset > MAX_OFFSET) {
    $app.innerHTML += `
      <p class="message">All the available products were obtained 😁</p>
    `;

    Observer.unobserve($observe);
  }

  if (isIntersecting && currentOffset <= MAX_OFFSET) {
    updateLocalStorageEntry('pagination', currentOffset);
    renderProducts(currentOffset, 10);
    currentOffset += 10;
  }
};

const Observer = new IntersectionObserver(ObserverTrigger, {
  treshold: 0.5,
});

Observer.observe($observe);
