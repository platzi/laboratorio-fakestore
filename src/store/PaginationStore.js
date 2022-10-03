const paginationStore = (() => {
  const FAKE_STORE_CURRENT_PAGE = 'FAKE_STORE_CURRENT_PAGE';

  const setCurrentPage = (page) => {
    window.localStorage.setItem(FAKE_STORE_CURRENT_PAGE, page);
  };

  const getCurrentPage = () => {
    return parseInt(window.localStorage.getItem(FAKE_STORE_CURRENT_PAGE), 10);
  };

  return {
    setCurrentPage, 
    getCurrentPage
  };
})();

export default paginationStore;