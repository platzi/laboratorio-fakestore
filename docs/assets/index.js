//variables
let offset = 00;
let limit = 10;
let maxOffset = false;

//Nodos DOM
const sectionCard = document.querySelector('.Items')
const $observe = document.getElementById('observe');
const endOfCatalog = document.querySelector('.catalog-finish')
endOfCatalog.classList.add('hidden')

const infiniteScroll = () => {
  const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100;
  
  if (endOfPage) {
    offset = offset + limit;
    loadData();
    if (maxOffset) {
      endOfCatalog.classList.remove('hidden')      
    }
    return
  }
};


//API

const API = 'https://api.escuelajs.co/api/v1/products';


//Events
window.addEventListener('load', loadData);
window.addEventListener('scroll', infiniteScroll, {passive: false});


//logic

function loadData() {
  let endpoint = `?offset=${offset}&limit=${limit}`;
  urlAPI = `${API}${endpoint}`  
  getData(urlAPI)  
}

function renderProducts(product){
  const cardArticle = document.createElement('article');
  cardArticle.classList.add('Card');  
  const cardImage = document.createElement('img');
  const cardTitle = document.createElement('h2');
  const cardPrice = document.createElement('small');  
  cardImage.setAttribute('data-img', product.images[0]);
  cardImage.setAttribute('alt', product.title);
  cardTitle.innerText = `${product.id} ${product.title}`;
  cardPrice.innerText = product.price;
  cardTitle.appendChild(cardPrice);
  cardArticle.appendChild(cardImage);
  cardArticle.appendChild(cardTitle);
  sectionCard.appendChild(cardArticle);
  
  lazyLoader.observe(cardImage); 
}


// API functions
const getData = async (urlAPI) => {
  try {
    const products = await fetchData(urlAPI)
    products.forEach(product => {           
      renderProducts(product)      
      if (products.length < 10) {
        maxOffset = true
      }
      });
  } catch {
    console.error(error)
  }
}

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI);
  const data = await response.json();
  return data;
}

//Utils
const lazyLoader = new IntersectionObserver(entries => {  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const url = entry.target.getAttribute('data-img')
      entry.target.setAttribute('src' , url)
      entry.target.addEventListener('error', () => {
        entry.target.setAttribute('src', "./img/failedload.jpg")
      });
    } 
  })
}, {
  rootMargin: '0px 0px 100px 0px',
  threshold: 0,  
});


