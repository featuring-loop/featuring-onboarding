import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

const filterButtonSection = style([
	sprinkles({
		paddingX: 'spacing-1000',
		paddingY: 'spacing-300',
		bgColor: 'white',
		borderColor: 'border-1',
		gap: 'spacing-200',
	}),
	{
		display: 'flex',
		alignItems: 'center',
		borderBottomWidth: '1px',
		borderBottomStyle: 'solid',
	},
]);

export const styles = {
	filterButtonSection,
};
