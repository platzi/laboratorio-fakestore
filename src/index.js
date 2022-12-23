import { getProductsFromPage } from './services/products.services';
import { createProductCard } from './view/products.ui';

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');

const loadProducts = async () => {
  const [error, products] = await getProductsFromPage(1, 10);

  if (!error) {
    products.forEach((product) => {
      $app.innerHTML += createProductCard(product);
    });
  } else {
    console.error(error);
  }
};

loadProducts();
