const infiniteAdd = function* (a, b) {
  let index = a;
  while(true) yield index += b;
};

const paginationFactory = (start, steps) => infiniteAdd(start, steps);
const paginationSave = page => window.localStorage.pagination = page;
const restartPagination = () => window.onload = window.localStorage.clear();

export const memoryPaginationFactory = (start, steps) => {
  const paginator = paginationFactory(start, steps);
  restartPagination();

  return () => {
    const page = paginator.next().value;
    paginationSave(page);
    return Number(window.localStorage.pagination);
  };
};
