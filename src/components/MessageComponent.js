const messageComponent = (() => {
  const createErrorMessage = () => {
    let newItem = document.createElement('div');
    newItem.classList.add('Error');
    newItem.innerText = "Todos los productos Obtenidos"

    return newItem;
  };

  return {
    createErrorMessage
  };
})();

export default messageComponent;