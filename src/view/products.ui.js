export const createProductCard = ({ title, price, images }) => {
  return `
    <article class="Card">
      <img src="${images[0]}" alt='' />
      <h2>
        ${title}
        <small>$ ${price}</small>
      </h2>
    </article>
  `;
};
