import { Api } from './api';
import { loadData } from './loadData';
import { updateOffsetApi } from './updateOffsetApi';

/**
 * Action to be taken when the observer is intersected
 * @param entries - Targets to observed.
 * @example
 * const OBSERVER = new IntersectionObserver(actionObserver, OPTIONS);
 */
async function actionObserver(
	entries: IntersectionObserverEntry[],
): Promise<void> {
	const ENTRY = entries[0];

	if (!ENTRY.isIntersecting) {
		return;
	}

	updateOffsetApi(Api.TenProducts);
	await loadData(Api.TenProducts);
}

const $OBSERVE = document.querySelector('#observe') as HTMLDivElement;
const OPTIONS = {
	rootMargin: '0px 0px 100% 0px',
};
const OBSERVER = new IntersectionObserver(actionObserver, OPTIONS);

OBSERVER.observe($OBSERVE);
