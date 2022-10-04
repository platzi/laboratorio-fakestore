const productService = (() => {
  const API = process.env.API;

  const getData = (offset, limit) => {
    return new Promise((resolve, reject) => {
      if (!offset) {
        offset = 0;
      }
  
      if (!limit) {
        limit = process.env.API_LIMIT;
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