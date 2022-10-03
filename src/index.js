import './styles/styles.scss';
import productService from './services/ProductService';
import cardComponent from './components/CardComponent';

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');

const loadData = async () => {
  try {
    const products = await productService.getData();
    const productsSection = cardComponent.createProductsSection(products);
    $app.appendChild(productsSection);
  } catch (error) {
    console.log(error)
  }
}

const intersectionObserver = new IntersectionObserver(entries => {
  // logic...
}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);

loadData();