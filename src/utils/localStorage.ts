const PAGINATION_KEY = 'pagination';

if (!localStorage.getItem('PAGINATION_KEY')) {
	localStorage.setItem(PAGINATION_KEY, '10');
}
