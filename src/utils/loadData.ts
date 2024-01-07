import { Product } from '@src/types/Product';

import { $MAIN, $NEW_ITEM } from '..';
import { buildProducts } from './buildProduct';
import { getData } from './getData';
import { OBSERVER } from './observer';

/** Load the products in the DOM
 * @param api - The API products to get the data for add the HTML.
 * @returns Promise<void>.
 * @example
 * ```ts
 * const API = new URL('https://api.escuelajs.co/api/v1/products')
 * await loadData(API);
 * ```
 */
export async function loadData(api: URL): Promise<void> {
	const TEN_PRODUCTS = await getData<Product>(api);
	const IS_EMPTY = isMaxOfProducts(TEN_PRODUCTS);

	if (IS_EMPTY) {
		messageAllProductsObtained();
		OBSERVER.disconnect();

		return;
	}

	const HTML_TEN_PRODUCTS = buildProducts(TEN_PRODUCTS);

	$NEW_ITEM.append(...HTML_TEN_PRODUCTS);
}

/**
 * Verify if the array of products is empty, if it is empty the api have not data.
 * @param products - Array of products.
 * @returns If the array of products is empty, return true, otherwise return false.
 * @example
 * ```ts
 * const TEN_PRODUCTS = await getData<Product>(api);
 * const IS_EMPTY = isMaxOfProducts(TEN_PRODUCTS);
 * 'IS_EMPTY - If the array of products is empty, return true, otherwise return false.'
 * ```
 * @see {@link Product}
 */
function isMaxOfProducts(products: Product[]): boolean {
	return products.length < 10;
}

/**
 * Print a message in the DOM that the api have not data.
 */
function messageAllProductsObtained(): void {
	const WARN_MESSAGE = document.createElement('p');

	WARN_MESSAGE.className = 'main__warn-message';
	WARN_MESSAGE.innerText = 'Todos los productos Obtenidos';
	$MAIN.append(WARN_MESSAGE);
}
