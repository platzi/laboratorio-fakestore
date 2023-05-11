
const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products';

/*#########################################################
                          MAIN 
#########################################################*/
window.onload = () => {
  localStorage.clear();
  localStorage.setItem("pagination", 0);
};




const getData = api => {
  console.log(api)
  fetch(api)
    .then(response => response.json())
    .then(response => {
      let products = response;
      let output = products.map(product => {
        // template
        return `<article class="Card">
              <img src="${product.images[0]}"/>
                <h2>${product.title}
                  <small>$${product.price}</small>
                </h2> 
              </article>`;
      });
      let newItem = document.createElement('section');
      newItem.classList.add('Items');
      newItem.innerHTML = output.join("");
      $app.appendChild(newItem);

    })
    .catch(error => console.log(error));
}

const loadData = () => {
  if (Number.parseInt(localStorage.getItem("pagination")) <= 200) { getData(API + pagination()) }
  else {
    intersectionObserver.unobserve($observe);
  }
}
const pagination = () => {

  let params = {
    "limit": 10,
    "offset": localStorage.getItem("pagination")
  };

  return "?" + Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
}

const intersectionObserver = new IntersectionObserver(entries => {
  // logic...
  if (entries[0].isIntersecting) {
    let next = Number.parseInt(localStorage.getItem("pagination"));
    next += next == 195 ? 5 : next == 0 ? 5 : 10;
    localStorage.setItem("pagination", next);
    loadData();
  }
}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);

