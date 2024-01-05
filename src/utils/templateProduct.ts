import { Product } from '@src/types/Product';

/**
 *
 * @param product - Product from API https://api.escuelajs.co/api/v1/products in JSON format.
 * @returns Article tag with skeleton product to append.
 */
export function templateProduct(product: Product): HTMLElement {
	const ARTICLE = document.createElement('article');
	const IMG = document.createElement('img');
	const TITLE = document.createElement('h2');
	const PRICE = document.createElement('small');

	ARTICLE.classList.add('card');
	IMG.src = product.images[0];
	TITLE.textContent = product.title;
	PRICE.textContent = `$${product.price}`;

	TITLE.append(PRICE);
	ARTICLE.append(IMG, TITLE);

	return ARTICLE;
}
