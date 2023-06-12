const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products';
const pagination = Number(localStorage.getItem('pagination')) || 4
let cantMaxProducts = null

/* Functions */
const getData = async (api, pagination, limit) => {
  try {
    if(cantMaxProducts && (cantMaxProducts <  pagination * limit)) {
      intersectionObserver.disconnect();
    }

    const response = await fetch(`${api}?offset=${pagination * limit}&limit=${limit}`);
    const products = await response.json();

    let output = products.map(({ title, price, images }) => {
      return (
        `<article class="Card">
          <img src=${images?.[0]} />
          <h2>
            ${title}
            <small>$ ${price}</small>
          </h2>
        </article>`
      );
    });

    let newItem = document.createElement('section');
    newItem.classList.add('Items');
    newItem.innerHTML = output.join('');
    $app.appendChild(newItem);

    localStorage.setItem('pagination', pagination + 1);
  } catch (error) {
    console.log(error);
  }
};

const loadData = async () => {
  await getData(API, pagination, 10);

  const cantMaxProductsRawr = await fetch(API)
  cantMaxProducts = await cantMaxProductsRawr.json()
  cantMaxProducts = cantMaxProducts.length
}

/* Browser API's */
const intersectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const pagination = Number(localStorage.getItem('pagination'))
      console.log(pagination)
      getData(API, pagination, 10);
    }
  })
}, {
  rootMargin: '0px 0px 200px 0px',
});

intersectionObserver.observe($observe);

/* Events */
window.addEventListener('beforeunload', () => {
  localStorage.clear()
});

/* First Render */
loadData()