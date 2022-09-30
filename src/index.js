const $app = document.getElementById('app')
const $observe = document.getElementById('observe')
const API = process.env.API

const getData = api => {
  fetch(api)
    .then(response => response.json())
    .then(response => {
      const products = response
      const output = products.map(product => {
        // template
      })
      const newItem = document.createElement('section')
      newItem.classList.add('Item')
      newItem.innerHTML = output
      $app.appendChild(newItem)
    })
    .catch(error => console.log(error))
}

const loadData = () => {
  getData(API)
}

const intersectionObserver = new IntersectionObserver(entries => {
  // logic...
}, {
  rootMargin: '0px 0px 100% 0px'
})

intersectionObserver.observe($observe)
