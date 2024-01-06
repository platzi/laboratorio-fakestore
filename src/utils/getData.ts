/**
 * Gets the data from API in JSON format.
 * @param api - The URL of the API.
 * @returns The data from the API in JSON format.
 * @example
 * const API = new URL('https://api.escuelajs.co/api/v1/products)
 * const DATA = await getData<Product>(api);
 * 'DATA - The data from the API in JSON format, in this case an array of products.'
 */
export const getData = <T>(api: URL): Promise<T[]> => {
	return fetch(api)
		.then((response) => response.json())
		.catch((error) => console.error(error));
};
