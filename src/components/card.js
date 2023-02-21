export const card = (product) => {
  return `
    <article class='Card'>
      <img src="${product.images[0]}"/>
      <h2>
        ${product.title}
        <small>Precio $${product.price}</small>  
      </h2>
    </article>
  `;
}