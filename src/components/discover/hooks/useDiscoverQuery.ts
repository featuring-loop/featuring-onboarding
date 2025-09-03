import { useSuspenseQuery, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { QUERY_KEY } from '@/shared/constant/queryKey';
import { DiscoverRequestDTO, DiscoverResponseData } from '@/components/discover/model/types';
import { getDiscover } from '@/components/discover/api/getDiscover';

export const discoverQueryOptions = (params?: DiscoverRequestDTO): UseSuspenseQueryOptions<DiscoverResponseData> => {
	return {
		queryKey: [QUERY_KEY.DISCOVER, params],
		queryFn: () => getDiscover(params),
	};
};

export function useDiscoverQuery(params?: DiscoverRequestDTO) {
	return useSuspenseQuery(discoverQueryOptions(params));
}
