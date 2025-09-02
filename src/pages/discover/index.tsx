import Header from '@/layout/header/Header';
import PlatformSegmentedSection from '@/components/discover/ui/PlatformSegmentedSection';
import FilterButtonSection from '@/components/discover/ui/FilterButtonSection';

export default function DiscoverPage() {
	return (
		<>
			<Header />
			<PlatformSegmentedSection />
			<FilterButtonSection/>
		</>
	);
}
