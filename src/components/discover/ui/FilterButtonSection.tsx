import { useRef, useState } from 'react';
import { CoreButton, CoreDropdown } from '@featuring-corp/components';
import { IconChevronDownOutline, IconSearchOutline, IconTuneOutline } from '@featuring-corp/icons';
import { styles } from '@/components/discover/feature/filterButtonSection.css';

function FilterButtonSection() {
	const [keywordOpen, setKeywordOpen] = useState(false);
	const [filterOpen, setFilterOpen] = useState(false);
	const keywordRef = useRef(null);
	const filterRef = useRef(null);

	return (
		<section className={styles.filterButtonSection}>
			<CoreButton
				prefix={<IconSearchOutline />}
				suffix={<IconChevronDownOutline />}
				text="키워드 검색"
				ref={keywordRef}
				onClick={() => setKeywordOpen((prev) => !prev)}
			/>
			<CoreDropdown open={keywordOpen} handler={setKeywordOpen} placement="bottom-end" targetRef={keywordRef}>
				<div>키워드 검색 드롭다운</div>
			</CoreDropdown>

			<CoreButton
				buttonType="tertiary"
				prefix={<IconTuneOutline />}
				suffix={<IconChevronDownOutline />}
				text="고급 필터 설정"
				ref={filterRef}
				onClick={() => setFilterOpen((prev) => !prev)}
			/>
			<CoreDropdown open={filterOpen} handler={setFilterOpen} placement="bottom-end" targetRef={filterRef}>
				<div>고급 필터 설정 드롭다운</div>
			</CoreDropdown>
		</section>
	);
}

export default FilterButtonSection;
