const isIntersecting = entry => {
  return entry.isIntersecting;
};

export const observerFactory = (callback, startCondition, stopCondition) => {
  const observer = new IntersectionObserver(entries => {
    entries.filter(isIntersecting).forEach(entry => {
      const node = entry.target;
      if (startCondition) callback();
      alert('here');
      if (stopCondition) observer.unobserve(node);
    });
  }, {
    root: null,
    rootMargin: '0px 0px 100% 0px',
    threshold: 0.5
  });

  return component => observer.observe(component);
};
