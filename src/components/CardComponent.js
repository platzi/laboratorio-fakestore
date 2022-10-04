const cardComponent = (() => {
  const getImage = (images) => {
    return images[0] ? images[0] : process.env.API_DEFAULT_IMAGE;
  }

  const createProductCard = (product) => {
    const productImage = getImage(product.images);

    return (
      `<article class="Card">
          <img src="${productImage}" alt="${product.title}" loading="lazy"/>
          <h2>
            ${product.id}-${product.title}
            <small>$ ${product.price}</small>
          </h2>
        </article>`
    )
  };

  const createProductsSection = (products) => {
    let output = products.map(product => createProductCard(product));
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