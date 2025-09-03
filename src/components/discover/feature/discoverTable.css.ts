import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/theme.css';
import { typoVariant } from '@/styles/typography.css';

export const tableContainer = style([
	{
		overflowX: 'auto',
	},
]);

export const table = style([
	{
		tableLayout: 'fixed',
		width: '100%',
		borderCollapse: 'collapse',
		borderSpacing: 0,
	},
]);

export const headerCell = style([
	sprinkles({
		bgColor: 'background-1',
		borderColor: 'border-2',
	}),
	{
		textAlign: 'left',
		position: 'sticky',
		top: 0,
		userSelect: 'none',
	},
]);

export const headerCellFixed = style([
	sprinkles({
		bgColor: 'background-1',
		borderColor: 'border-2',
	}),
	{
		position: 'sticky',
		left: 0,
		zIndex: 10,
	},
]);

export const headerCellClickable = style({
	cursor: 'pointer',
});

export const headerContent = style([
	sprinkles({
		padding: 'spacing-300',
		borderColor: 'border-default',
	}),
	{
		borderRightWidth: '1px',
		borderRightStyle: 'solid',
		borderBottomWidth: '1px',
		borderBottomStyle: 'solid',
	},
]);

export const headerContentFixed = style([
	sprinkles({
		borderColor: 'border-2',
	}),
	{
		paddingLeft: vars.global.spacing[1000],
	},
]);

export const headerIconContainer = style([
	sprinkles({
		gap: 'spacing-100',
	}),
	{
		display: 'flex',
		alignItems: 'center',
	},
]);

export const dataCellFixed = style([
	sprinkles({
		borderColor: 'border-2',
	}),
	{
		position: 'sticky',
		left: 0,
		zIndex: 10,
		borderLeftWidth: '1px',
		borderLeftStyle: 'solid',
	},
]);

export const dataCellRegular = style([
	sprinkles({
		borderColor: 'border-default',
	}),
	{
		borderRightWidth: '1px',
		borderRightStyle: 'solid',
	},
]);

export const dataCellContent = style([
	sprinkles({
		padding: 'spacing-300',
	}),
]);

export const dataCellContentFixed = style([
	dataCellContent,
	sprinkles({
		borderColor: 'border-2',
	}),
	{
		paddingLeft: vars.global.spacing[1000],
		borderRightWidth: '1px',
		borderRightStyle: 'solid',
	},
]);

export const backgroundWhite = style([
	sprinkles({
		bgColor: 'background-1',
	}),
]);

export const backgroundGray = style([
	sprinkles({
		bgColor: 'background-2',
	}),
]);
