const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
let offset = GetLocalStorage() || '5';
window.addEventListener('DOMContentLoaded', () => {
  offset = '5';
  loadData(API)
  API = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;
  console.log("api", API);

  setLocalStorage();
})
console.log('offset', offset);
let limit = '10';
let API = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;

function setLocalStorage() {
  localStorage.setItem('pagination', JSON.stringify(offset));
}
function GetLocalStorage() {
  return JSON.parse(localStorage.getItem('pagination'));
}


const getData = api => {
  fetch(api)
    .then(response => response.json())
    .then(response => {

      setLocalStorage()
      //console.log("response", response);
      response.forEach(product => {
        // template
        //console.log("products", product);
        const article = document.createElement('article');
        article.classList.add("Card");

        const image = document.createElement('img');
        image.src = product.images[0]

        const h2 = document.createElement('h2');
        h2.innerText = product.title;

        const small = document.createElement('small');
        small.innerText = `$ ${product.price}`;

        article.appendChild(image);
        article.appendChild(h2);
        h2.appendChild(small);
        $app.appendChild(article);


      });

      const btnPagination = document.createElement('button')
      btnPagination.innerText = 'next Page'
      $app.appendChild(btnPagination);

      btnPagination.addEventListener('click', () => {
        offset = Number(offset) + Number(limit);
        offset = String(offset)
        API = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
        setLocalStorage();
        loadData(API)
        console.log("Funciona")
      })

      // let newItem = document.createElement('section');
      // newItem.classList.add('Item');
      // newItem.innerHTML = output;
      // $app.appendChild(newItem);
    })
    .catch(error => console.log(error));
}


const loadData = (urlAPI) => {
  getData(urlAPI);
}

const intersectionObserver = new IntersectionObserver(entries => {
  // logic...
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      console.log("image");
    }
  });
}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);

