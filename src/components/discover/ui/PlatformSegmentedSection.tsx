import { CoreSegmentedControl } from '@featuring-corp/components';
import {
	IconInstagramColored,
	IconNaverBlogColored,
	IconTiktokColored,
	IconXColored,
	IconYoutubeColored,
} from '@featuring-corp/icons';
import { usePlatformSelection } from '../hooks/usePlatformSelection';
import { styles } from '@/components/discover/feature/platformSegmentControl.css';

const PLATFORMS = [
	{ value: 'instagram', label: '인스타그램', icon: <IconInstagramColored /> },
	{ value: 'youtube', label: '유튜브', icon: <IconYoutubeColored /> },
	{ value: 'x', label: '엑스', icon: <IconXColored /> },
	{ value: 'tiktok', label: '틱톡', icon: <IconTiktokColored /> },
	{ value: 'naver-blog', label: '네이버 블로그', icon: <IconNaverBlogColored /> },
] as const;

function PlatformSegmentedSection() {
	const { selectedPlatform, handlePlatformChange } = usePlatformSelection();

	return (
		<section className={styles.platformSegmentedSection}>
			{PLATFORMS.map(({ value, label, icon }) => (
				<CoreSegmentedControl
					size="lg"
					key={value}
					leadingElement={icon}
					selected={selectedPlatform === value}
					onClick={() => handlePlatformChange(value)}
				>
					{label}
				</CoreSegmentedControl>
			))}
		</section>
	);
}

export default PlatformSegmentedSection;
