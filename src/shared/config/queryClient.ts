import { QueryClient } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 60 * 1000;

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: DEFAULT_STALE_TIME,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			retry: 0,
		},
	},
});
