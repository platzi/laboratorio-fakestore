localStorage.removeItem("pagination");

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products';


const getproducts = () => {
  const limit = 10;
  const initialOffset = 5;

  let offset = localStorage.getItem("pagination");
  if (!offset) {
    offset = initialOffset;
    localStorage.setItem("pagination", offset);
  } else {
    offset = Number(offset) + limit;
    localStorage.setItem("pagination", offset);
  }

  const url = `${API}?offset=${offset}&limit=${limit}`;

  fetch(url)
    .then(response => response.json())
    .then(response => {
      let products = response;
      renderProducts(products);
    })
      .catch(error => console.log(error));
    }

    const cardTemplate = (product) => {
      const template = 
      `<article class = "Card">
        <img src="${product.images[0]}"/>
        <h2>
          ${product.title}
          <span>$ ${product.price}</span>
        </h2>
      </article>`

      return template;
    }

    const renderProducts = (products) => {
      let productsContainer = document.createElement('section');
      productsContainer.classList.add('Items');

      let template="";
      products.forEach(product => {
        template += cardTemplate(product);
      });

      productsContainer.innerHTML += template;
      $app.appendChild(productsContainer);
    }


const intersectionObserver = new IntersectionObserver(entries => {
  // logic...
  if (entries[0].isIntersecting) getproducts();
}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);
