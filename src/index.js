import './styles/styles.scss';
import productService from './services/ProductService';
import cardComponent from './components/CardComponent';
import paginationStore from './store/PaginationStore';

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');

const loadData = async (page) => {
  let offset = page;

  if (offset !== 0) {
    offset = page * 10;
  }

  try {
    const products = await productService.getData(offset);
    const productsSection = cardComponent.createProductsSection(products);
    
    $app.appendChild(productsSection);
  } catch (error) {
    console.log(error)
  }
};

const loadNextProducts = entries => {
  entries.forEach(async (entry) => {
    const { isIntersecting, intersectionRatio } = entry;
    const currentPage = paginationStore.getCurrentPage();  
  
    if (isIntersecting && intersectionRatio >= 1) {
      try {
        await loadData(currentPage);
        
        const nextPage = currentPage + 1;
        paginationStore.setCurrentPage(nextPage);
      } catch (error) {
        console.log(error)
      }
    }
  });
};

const main = async () => {
  let currentPage = paginationStore.getCurrentPage();
  
  const intersectionObserver = new IntersectionObserver(loadNextProducts, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
  });

  if (currentPage != 0) {
    currentPage = 0;
    paginationStore.setCurrentPage(currentPage);
  }

  intersectionObserver.observe($observe);
}

main();