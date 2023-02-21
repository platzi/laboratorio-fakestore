export const itemsListSection = (output) => {
  const newItem = document.createElement('section');
  newItem.classList.add('Items');
  newItem.innerHTML = output;
  return newItem;
}