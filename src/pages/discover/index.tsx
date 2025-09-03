import { Suspense } from 'react';
import Header from '@/layout/header/Header';
import PlatformSegmentedSection from '@/components/discover/ui/PlatformSegmentedSection';
import FilterButtonSection from '@/components/discover/ui/FilterButtonSection';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/shared/ui/ErrorFallback';

export default function DiscoverPage() {
	const DiscoverTable = dynamic(() => import('@/components/discover/ui/DiscoverTable'), { ssr: false });
	return (
		<>
			<Header />
			<PlatformSegmentedSection />
			<FilterButtonSection />
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Suspense fallback={<div>데이터를 불러오는 중...</div>}>
					<DiscoverTable />
				</Suspense>
			</ErrorBoundary>
		</>
	);
}
