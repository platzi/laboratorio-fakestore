import { Product } from '@src/types/Product';

import { NEW_ITEM } from '..';
import { buildProducts } from './buildProduct';
import { getData } from './getData';

/** Load the products in the DOM
 * @param api - The API products to get the data for add the HTML.
 * @returns Promise<void>.
 * @example
 * const API = new URL('https://api.escuelajs.co/api/v1/products')
 * await loadData(API);
 */
export async function loadData(api: URL): Promise<void> {
	const TEN_PRODUCTS = await getData<Product>(api);
	const HTML_TEN_PRODUCTS = buildProducts(TEN_PRODUCTS);

	NEW_ITEM.append(...HTML_TEN_PRODUCTS);
}
