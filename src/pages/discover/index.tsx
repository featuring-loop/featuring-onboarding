import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '@/layout/header/Header';
import FilterButtonSection from '@/components/discover/ui/FilterButtonSection';
import PlatformSegmentedSection from '@/components/discover/ui/PlatformSegmentedSection';
import ErrorFallback from '@/shared/ui/ErrorFallback';
import SkeletonDiscoverTable from '@/components/discover/ui/SkeletonDiscoverTable';
import DiscoverResultSection from '@/components/discover/ui/DiscoverResultSection';

export default function DiscoverPage() {
	const DiscoverTable = dynamic(() => import('@/components/discover/ui/DiscoverTable'), { ssr: false });
	return (
		<>
			<Header />
			<PlatformSegmentedSection />
			<FilterButtonSection />
			<DiscoverResultSection />
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Suspense fallback={<SkeletonDiscoverTable />}>
					<DiscoverTable />
				</Suspense>
			</ErrorBoundary>
		</>
	);
}
