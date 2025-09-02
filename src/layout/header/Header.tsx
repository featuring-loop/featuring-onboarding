import { CoreButton } from '@featuring-corp/components';
import { IconFileOutline } from '@featuring-corp/icons';
import { styles } from '@/layout/header/feature/header.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.headerTitle}>인플루언서 찾기</h1>
			<CoreButton buttonType="tertiary" prefix={<IconFileOutline />} size="md" text="인플루언서 찾기 가이드" />
		</header>
	);
}
