import { Product } from '@src/types/Product';

/**
 * Create HTML structure for a product.
 * @param product - Product from API https://api.escuelajs.co/api/v1/products in JSON format.
 * @returns Article tag with skeleton product to append.
 *
 * @example
 * ```ts
 * htmlTemplateProduct({
 *		...
 *		title: 'Luxurious Bronze Bacon',
 *		price: 361,
 *		images: [
 *			'https://i.imgur.com/1twoaDy.jpeg',
 *		],
 *		...
 *	})
 * ```
 * ```html
 * Build:
 * <article class="card">
 *	<img
 *		src="https://i.imgur.com/1twoaDy.jpeg"
 *		alt="Luxurious Bronze Bacon"
 *	/>
 *	<h2>
 *		Luxurious Bronze Bacon
 *		<small>$361</small>
 *	</h2>
 * </article>
 * ```
 * @see {@link Product}
 */
function htmlTemplateProduct(product: Product): HTMLElement {
	const ARTICLE = document.createElement('article');
	const IMG = document.createElement('img');
	const TITLE = document.createElement('h2');
	const PRICE = document.createElement('small');

	ARTICLE.classList.add('card');
	IMG.src = product.images[0];
	IMG.alt = product.title;
	IMG.width = 200;
	IMG.height = 200;
	TITLE.textContent = product.title;
	PRICE.textContent = `$${product.price}`;

	TITLE.append(PRICE);
	ARTICLE.append(IMG, TITLE);

	return ARTICLE;
}

export default htmlTemplateProduct;
