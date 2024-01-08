import { Api } from '@src/api/api';
import { loadData } from '@utils/loadData';
import updateOffsetApi from '@utils/updateOffsetApi';

/**
 * Action to be taken when the observer is intersected
 * @param entries - Targets to observed.
 * @example
 * const OBSERVER = new IntersectionObserver(actionObserver, OPTIONS);
 * @see {@link https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API}
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

export const $OBSERVE = document.querySelector('#observe') as HTMLDivElement;

const OPTIONS = {
	rootMargin: '0px 0px 100% 0px',
};

export const OBSERVER = new IntersectionObserver(actionObserver, OPTIONS);
