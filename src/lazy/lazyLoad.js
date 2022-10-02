const isIntersecting = entry => {
  return entry.isIntersecting;
};

const observer = new IntersectionObserver(entries => {
  entries.filter(isIntersecting).forEach(entry => {
    const node = entry.target;
    loadData(pagination.next().value);
    observer.unobserve(node);
  });
});

export const registerImage = container => observer.observe(container);
