import { Product } from '@src/types/Product';

import { htmlTemplateProduct } from './templateProduct';

/**
 * Build the HTML for the products to be added to the DOM.
 * @param products - The products to be added to the DOM.
 * @returns HTMLElement[] The HTML for the products to be added to the DOM.
 * @example
 *
 * ```ts
 * const HTML_PRODUCTS = buildProducts(PRODUCTS);
 * ```
 * @see {@link Product}
 */
export function buildProducts(products: Product[]): HTMLElement[] {
	return products.map((product) => {
		return htmlTemplateProduct(product);
	});
}
