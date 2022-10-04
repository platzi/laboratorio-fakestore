import './styles/styles.scss';
import productService from './services/ProductService';
import cardComponent from './components/CardComponent';
import paginationStore from './store/PaginationStore';
import messageComponent from './components/MessageComponent';

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');

let intersectionObserver;

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
    const apiResultsLimit = parseInt(process.env.API_RESULTS_LIMIT, 10);
    const apiLimit = parseInt(process.env.API_LIMIT, 10);
    const lastPage = apiResultsLimit / apiLimit;
    const nextPage = currentPage + 1;
  
    if (isIntersecting && intersectionRatio >= 1) {
      try {
        if (nextPage >= lastPage) {
          const errorMessage = messageComponent.createErrorMessage();
          $app.appendChild(errorMessage);
          intersectionObserver.unobserve($observe);
        } else {
          await loadData(currentPage);
          paginationStore.setCurrentPage(nextPage);
        }

      } catch (error) {
        console.log(error)
      }
    }
  });
};

const main = async () => {
  let currentPage = paginationStore.getCurrentPage();
  
  intersectionObserver = new IntersectionObserver(loadNextProducts, {
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