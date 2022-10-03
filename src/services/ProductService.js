const productService = (() => {
  const API = 'https://api.escuelajs.co/api/v1/products';

  const getData = (offset, limit) => {
    return new Promise((resolve, reject) => {
      if (!offset) {
        offset = 0;
      }
  
      if (!limit) {
        limit = 10;
      }
  
      fetch(`${API}?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  }

  return {
    getData
  }
})();

export default productService;