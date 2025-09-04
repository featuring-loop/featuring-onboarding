import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

const getGapVariant = () => {
	const gapVariants = Object.fromEntries(
		Object.entries(vars.global.spacing).map(([key, value]) => [`spacing-${key}`, { gap: value }]),
	);

	return gapVariants as Record<`spacing-${keyof typeof vars.global.spacing}`, { gap: string }>;
};

export const flex = recipe({
	base: {
		display: 'flex',
	},
	variants: {
		display: {
			flex: { display: 'flex' },
			inlineFlex: { display: 'inline-flex' },
		},
		justify: {
			start: { justifyContent: 'flex-start' },
			center: { justifyContent: 'center' },
			end: { justifyContent: 'flex-end' },
			between: { justifyContent: 'space-between' },
			around: { justifyContent: 'space-around' },
			evenly: { justifyContent: 'space-evenly' },
		},
		align: {
			center: { alignItems: 'center' },
			start: { alignItems: 'flex-start' },
			end: { alignItems: 'flex-end' },
			stretch: { alignItems: 'stretch' },
		},
		direction: {
			row: { flexDirection: 'row' },
			column: { flexDirection: 'column' },
			rowReverse: { flexDirection: 'row-reverse' },
			columnReverse: { flexDirection: 'column-reverse' },
		},
		wrap: {
			nowrap: { flexWrap: 'nowrap' },
			wrap: { flexWrap: 'wrap' },
			reverse: { flexWrap: 'wrap-reverse' },
		},
		gap: getGapVariant(),
	},
	defaultVariants: {
		display: 'flex',
		justify: 'start',
		align: 'center',
		direction: 'row',
	},
});
