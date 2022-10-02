export const buildProduct = (product, index) => `
  <article class="Card">
    <h1>Product #${index}</h1>
    <img src="${product.images[0]}" />
    <h2>
      ${product.title}
      <small>$ ${product.price}</small>
    </h2>
  </article>
`;
