export const buildProduct = product => `
  <article class="Card">
    <img src="${product.images[0]}" />
    <h2>
      ${product.title}
      <small>$ ${product.price}</small>
    </h2>
  </article>
`;
