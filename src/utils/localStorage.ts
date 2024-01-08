export const PAGINATION_KEY = 'pagination';

localStorage.removeItem(PAGINATION_KEY);

if (!localStorage.getItem(PAGINATION_KEY)) {
	localStorage.setItem(PAGINATION_KEY, '5');
}

/**
 * Update the "pagination" in the local storage when the query parameter offset change.
 * @param api - Products API.
 */
export function updateStorage(api: URL): void {
	const NEW_PAGE = api.searchParams.get('offset');

	if (NEW_PAGE) {
		localStorage.setItem(PAGINATION_KEY, NEW_PAGE);
	}
}
