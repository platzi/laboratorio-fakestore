/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import '@styles/styles.css';
import '@utils/googleAnalytics.js';

import { Product } from './types/Product';
import { Api } from './utils/api';

const $APP = document.querySelector('#app');
const $OBSERVE = document.querySelector('#observe');

const getData = (api: URL) => {
	fetch(api)
		.then((response) => response.json())
		.then((response) => {
			const products: Product[] = response;
			const output = products.map((product) => {
				// template
			});
			const newItem = document.createElement('section');

			newItem.classList.add('Item');
			// newItem.innerHTML = output;
			// $APP.appendChild(newItem);
		})
		.catch((error) => console.error(error));
};

const loadData = () => {
	getData(Api.Products);
};

const intersectionObserver = new IntersectionObserver(
	(entries) => {
		// logic...
	},
	{
		rootMargin: '0px 0px 100% 0px',
	},
);

// intersectionObserver.observe($OBSERVE);
