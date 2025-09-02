import { DiscoverRequestDTO } from '@/components/discover/model/types';

export const END_POINT = {
	GET_DISCOVER: `/api/discover`,
};

export function buildDiscoverUrl(params: DiscoverRequestDTO = {}): string {
	const query = new URLSearchParams();

	query.set('page', String(params.page ?? 1));
	query.set('page_size', String(params.page_size ?? 20));

	const entries = Object.entries(params).filter(([key]) => !['page', 'page_size'].includes(key));

	for (const [key, value] of entries) {
		if (value !== undefined && value !== null && value !== '') {
			query.set(key, String(value));
		}
	}

	return `${END_POINT.GET_DISCOVER}?${query.toString()}`;
}
