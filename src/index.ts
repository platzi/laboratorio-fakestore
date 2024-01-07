/* eslint-disable padding-line-between-statements */
import '@styles/styles.css';
import '@utils/googleAnalytics.js';
import '@utils/observer.ts';
import '@utils/localStorage.ts';

import { Api } from './utils/api';
import { loadData } from './utils/loadData';

export const $NEW_ITEM = document.createElement('section');
export const $MAIN = document.querySelector('.main') as HTMLElement;
const $APP = document.querySelector('#app') as HTMLDivElement;
$NEW_ITEM.classList.add('main__items-container');
$APP.append($NEW_ITEM);
await loadData(Api.TenProducts);
