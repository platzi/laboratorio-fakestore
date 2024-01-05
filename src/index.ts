/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import '@styles/styles.css';
import '@utils/googleAnalytics.js';

import { Product } from './types/Product';
import { Api } from './utils/api';
import { templateProduct as htmlTemplateProduct } from './utils/templateProduct';

const $APP = document.querySelector('#app');
const $OBSERVE = document.querySelector('#observe');

/** Gets the data from API in JSON format. */
const getData = <T>(api: URL): Promise<T[]> => {
	return fetch(api)
		.then((response) => response.json())
		.catch((error) => console.error(error));
};

/** Build the HTML for the products to be added to the DOM.  */
function buildProducts(products: Product[]) {
	return products.map((product) => {
		return htmlTemplateProduct(product);
	});
}

const TEN_PRODUCTS = await getData<Product>(Api.TenProducts);
const HTML_TEN_PRODUCTS = buildProducts(TEN_PRODUCTS);

// const getData = (api: URL) => {
// 	fetch(api)
// 		.then((response) => response.json())
// 		.then((response) => {
// 			const PRODUCTS: Product[] = response;
// 			const OUTPUT: HTMLElement[] = PRODUCTS.map((product) => {
// 				return templateProduct(product);
// 			});
// 			const newItem = document.createElement('section');

// 			newItem.classList.add('item');
// 			console.log(OUTPUT);
// 			// newItem.innerHTML = output;
// 			// $APP.appendChild(newItem);
// 		})
// 		.catch((error) => console.error(error));
// };

// const loadData = () => {
// 	getData(Api.Products);
// };

// const intersectionObserver = new IntersectionObserver(
// 	(entries) => {
// 		// logic...
// 	},
// 	{
// 		rootMargin: '0px 0px 100% 0px',
// 	},
// );

// intersectionObserver.observe($OBSERVE);
