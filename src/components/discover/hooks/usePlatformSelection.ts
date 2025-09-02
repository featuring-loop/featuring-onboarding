import { useEffect } from 'react';
import { useRouter } from 'next/router';

type PlatformType = 'instagram' | 'youtube' | 'x' | 'tiktok' | 'naver-blog';

const PLATFORMS = [
	{ value: 'instagram', label: '인스타그램' },
	{ value: 'youtube', label: '유튜브' },
	{ value: 'x', label: '엑스' },
	{ value: 'tiktok', label: '틱톡' },
	{ value: 'naver-blog', label: '네이버 블로그' },
] as const;

const DEFAULT_PLATFORM: PlatformType = 'instagram';

const isValidPlatform = (platform: string | undefined): platform is PlatformType => {
	return typeof platform === 'string' && PLATFORMS.some((p) => p.value === platform);
};

export const usePlatformSelection = () => {
	const router = useRouter();

	const queryPlatform = router.query.platform as string;
	const selectedPlatform = isValidPlatform(queryPlatform) ? queryPlatform : DEFAULT_PLATFORM;

	const handlePlatformChange = (value: string) => {
		const newQuery = { ...router.query };
		newQuery.platform = value;

		router.push(
			{
				pathname: router.pathname,
				query: newQuery,
			},
			undefined,
			{ shallow: true },
		);
	};

	useEffect(() => {
		if (router.isReady && !isValidPlatform(queryPlatform)) {
			const newQuery = { ...router.query };
			newQuery.platform = DEFAULT_PLATFORM;

			router.replace(
				{
					pathname: router.pathname,
					query: newQuery,
				},
				undefined,
				{ shallow: true },
			);
		}
	}, [router.isReady, queryPlatform, router]);

	return {
		selectedPlatform,
		handlePlatformChange,
	};
};

export type { PlatformType };
export { PLATFORMS };
