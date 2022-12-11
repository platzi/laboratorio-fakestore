import getData from "../utils/getData";
import lazyLoader from "../utils/LazyLoader";

//variables
localStorage.setItem('offset', 5);
localStorage.setItem('limit', 10);
localStorage.setItem('maxOffset', false);
const sectionCard = document.querySelector('.Items')

async function renderProducts() {
    const data = await getData();
    const allItem = []
    data.forEach(product => {
      const cardArticle = document.createElement('article');
      cardArticle.classList.add('Card');  
      const cardImage = document.createElement('img');
      const cardTitle = document.createElement('h2');
      const cardPrice = document.createElement('small');  
      cardImage.dataset.src = product.images[0];
      cardImage.alt = product.title;
      cardTitle.innerText = `${product.id} ${product.title}`;
      cardPrice.innerText = product.price;
      cardTitle.appendChild(cardPrice);
      cardArticle.appendChild(cardImage);
      cardArticle.appendChild(cardTitle);
      allItem.push(cardArticle)
    
     lazyLoader.observe(cardImage); 
    })
    sectionCard.append(...allItem);
  }


export default renderProducts