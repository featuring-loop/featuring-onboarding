import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '@/layout/header/Header';
import FilterButtonSection from '@/components/discover/ui/FilterButtonSection';
import PlatformSegmentedSection from '@/components/discover/ui/PlatformSegmentedSection';
import ErrorFallback from '@/shared/ui/ErrorFallback';
import SkeletonTable from '@/components/discover/ui/SkeletonTable';

export default function DiscoverPage() {
	const DiscoverTable = dynamic(() => import('@/components/discover/ui/DiscoverTable'), { ssr: false });
	return (
		<>
			<Header />
			<PlatformSegmentedSection />
			<FilterButtonSection />
			<SkeletonTable />
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Suspense fallback={<SkeletonTable />}>
					<DiscoverTable />
				</Suspense>
			</ErrorBoundary>
		</>
	);
}
