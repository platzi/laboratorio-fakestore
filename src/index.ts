/* eslint-disable padding-line-between-statements */
import '@styles/styles.css';
import '@utils/googleAnalytics.js';
import '@utils/observer.ts';
import '@utils/localStorage.ts';

import { Api } from '@src/api/api';
import { loadData } from '@utils/loadData';

export const $MAIN = document.querySelector('.main') as HTMLElement;
export const $APP = document.querySelector('#app') as HTMLDivElement;
await loadData(Api.TenProducts);
