import Header from '@/layout/header/Header';
import PlatformSegmentedSection from '@/components/discover/ui/PlatformSegmentedSection';
import FilterButtonSection from '@/components/discover/ui/FilterButtonSection';
import DiscoverTable from '@/components/discover/ui/DiscoverTable';

export default function DiscoverPage() {
	return (
		<>
			<Header />
			<PlatformSegmentedSection />
			<FilterButtonSection />
			<DiscoverTable />
		</>
	);
}
