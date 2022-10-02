const $app = document.getElementById('app');
const API = 'https://api.escuelajs.co/api/v1/products?offset=:start&limit=:number';
const START = 0
const STEPS = 10;

const isIntersecting = entry => {
  return entry.isIntersecting;
};

const observer = new IntersectionObserver(entries => {
  entries.filter(isIntersecting).forEach(entry => {
    const node = entry.target;
    loadData(pagination.next().value, STEPS);
    observer.unobserve(node);
  });
});

const registerImage = img => observer.observe(img);

const infiniteAdd = function* (init, steps) {
  let index = init;
  while(true) yield index += steps;
};

const buildItem = (product, index) => `
  <article class="Card">
    <h1>Product #${index}</h1>
    <img src="${product.images[0]}" />
    <h2>
      ${product.title}
      <small>$ ${product.price}</small>
    </h2>
  </article>
`;

const getData = async api => {
  const response = await fetch(api);
  const products = await response.json();
  return products.map((product, index) => buildItem(product, index));
}

const pagination = infiniteAdd(0, STEPS);

const loadData = async (page, steps) => {
  try {
    const products = await getData(
      API
      .replace(':start', page)
      .replace(':number', steps)
    );
    products.forEach((product, index) => {
      const container = document.createElement('div');
      container.classList.add('Item');
      container.innerHTML = product;
      $app.appendChild(container);
      if (index === steps - 1) registerImage(container);
    });
  } catch(err) {
    console.error(err);
  }
}

loadData(pagination.next().value, STEPS);
