import '@styles/styles.css';
import { buildProduct } from '@components/product';
import { memoryPaginationFactory } from '@helpers/pagination';

const $app = document.getElementById('app');
const API = process.env.PLATZI_API;
const START = Number(process.env.PRODUCT_START);
const STEPS = Number(process.env.PAGINATION_STEPS);
const LIMIT = Number(process.env.LIMIT);

const stepPagination = memoryPaginationFactory(0, STEPS);
const addPage = () => loadData(stepPagination(), 10);

const isIntersecting = entry => {
  return entry.isIntersecting;
};

const endMessage = () => {
  const msgContainer = document.createElement('div');
  msgContainer.innerHTML = '<p> Todos los productos cargados';
  $app.appendChild(msgContainer);
};

const observerFactory = (callback, stopCondition) => {
  const observer = new IntersectionObserver(entries => {
    entries.filter(isIntersecting).forEach(entry => {
      const node = entry.target;
      if (stopCondition()) {
        endMessage();
        observer.unobserve(node);
        return;
      }
      callback();
    });
  }, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
  });

  return component => observer.observe(component);
};

const observe = observerFactory(() => addPage(), () => window.localStorage.pagination >= LIMIT);

const getData = async api => {
  const response = await fetch(api);
  const products = await response.json();
  return products.map((product, index) => buildProduct(product, index));
}

const loadData = async page => {
  try {
    const products = await getData(
      API
      .replace(':start',  page + START)
      .replace(':number', STEPS)
    );
    const $productsContainer = document.createElement('div');
    $productsContainer.classList.add('Items');
    const $elements = products.map(product => {
      const $container = document.createElement('div');
      $container.innerHTML = product;
      return $container;
    });
    $productsContainer.append(...$elements);
    $app.appendChild($productsContainer);
  } catch(err) {
    console.error(err);
  }
}

observe(document.getElementById('observable'));
