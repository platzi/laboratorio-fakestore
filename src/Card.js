export function Card (product) {
  return `<article class="Card">
  <img 
    src=${product.images[0]} 
    alt="${product.title}"
    width="350px"
    height="350px"
  />
  <h2>
    ${product.title}
    <small>$ ${product.price}</small>
  </h2>
</article>`
}
