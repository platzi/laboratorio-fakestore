import './styles/main.css';
import renderProducts from './templates/Template';
import infiniteScroll from './utils/infiniteScroll';


//Nodos DOM
const $observe = document.getElementById('observe');

//Events
window.addEventListener('load', renderProducts);
window.addEventListener('scroll', infiniteScroll, {passive: false});
