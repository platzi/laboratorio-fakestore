/**
 * Update the query parameter "offset" API when the observer is intersected.
 * @param api - The API to update.
 * @returns Void.
 * @example
 * ```ts
 * const API = new URL('https://api.escuelajs.co/api/v1/products?offset=5&limit=10')
 * API.searchParams.get('offset') is 5.
 * updateOffsetApi(API)
 *
 * Result
 * API.searchParams.get('offset') now is 15.
 * ```
 * @see {@link https://developer.mozilla.org/es/docs/Web/API/URL}
 */
export function updateOffsetApi(api: URL): void {
	const OFFSET = api.searchParams.get('offset');
	const NEW_OFFSET = Number(OFFSET) + 10;

	api.searchParams.set('offset', String(NEW_OFFSET));
}
