const cardComponent = (() => {

  const createProductCard = (product) => {
    return (
      `<article class="Card">
          <img src="${product.images[0]}" alt="${product.title}" loading="lazy"/>
          <h2>
            ${product.id}-${product.title}
            <small>$ ${product.price}</small>
          </h2>
        </article>`
    )
  };

  const createProductsSection = (products) => {
    let output = products.map(product => {
      return (
        `<article class="Card">
          <img src="${product.images[0]}" alt="${product.title}" loading="lazy"/>
          <h2>
            ${product.id}-${product.title}
            <small>$ ${product.price}</small>
          </h2>
        </article>`
      )
    });

    let newItem = document.createElement('section');
    newItem.classList.add('Items');
    newItem.innerHTML = output.join('');

    return newItem;
  };

  return {
    createProductsSection
  };
})();

export default cardComponent;