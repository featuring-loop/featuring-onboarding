import { style } from '@vanilla-extract/css';
import { typoVariant } from '@/styles/typography.css';
import { sprinkles } from '@/styles/sprinkles.css';

const header = style([
	sprinkles({
		paddingX: 'spacing-1000',
		bgColor: 'white',
		borderColor: 'border-1',
	}),
	{
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: '1px',
		borderBottomStyle: 'solid',
	},
]);

const headerTitle = style([
	typoVariant.heading[3],
	sprinkles({
		color: 'black',
	}),
]);

export const styles = {
	header,
	headerTitle,
};
