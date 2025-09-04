import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

const platformSegmentedSection = style([
	sprinkles({
		paddingX: 'spacing-1000',
		paddingY: 'spacing-300',
		bgColor: 'white',
		borderColor: 'border-1',
		gap: 'spacing-200',
	}),
	{
		position: 'sticky',
		top: 0,
		zIndex: 10,
		display: 'flex',
		alignItems: 'center',
		borderBottomWidth: '1px',
		borderBottomStyle: 'solid',
	},
]);

export const styles = { platformSegmentedSection };
