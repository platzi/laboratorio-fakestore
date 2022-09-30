import { Card } from './Card'

const $app = document.getElementById('app')
const $observe = document.getElementById('observe')
const API = import.meta.env.VITE_API

window.localStorage.setItem('pagination', 5)

const getData = async api => {
  try {
    const res = await fetch(api)
    const products = await res.json()
    if (products.length !== 0) {
      const output = products.map(Card)
      const newItem = document.createElement('section')
      newItem.classList.add('Items')
      newItem.innerHTML = output.join('')
      $app.appendChild(newItem)
    } else {
      intersectionObserver.unobserve($observe)
      const newItem = document.createElement('p')
      newItem.classList.add('Items')
      newItem.innerText = 'Todos los productos Obtenidos'
      $app.appendChild(newItem)
    }
  } catch (e) {
    console.log(e)
  }
}

const loadData = async () => {
  const limit = 10
  const offset = Number(window.localStorage.getItem('pagination'))
  window.localStorage.setItem('pagination', offset + limit)
  await getData(`${API}?offset=${offset}&limit=${limit}`)
}

// Intersection Observer
const intersectionObserver = new window.IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadData()
  }
}, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  tracehold: 0
})

intersectionObserver.observe($observe)

// onbeforeunload Event
const handleBeforeUnload = (e) => {
  window.localStorage.removeItem('pagination')
  window.removeEventListener(handleBeforeUnload)
}

window.addEventListener('onbeforeunload', handleBeforeUnload)
