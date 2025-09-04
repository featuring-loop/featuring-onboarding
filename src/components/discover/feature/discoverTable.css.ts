import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { typoVariant } from '@/styles/typography.css';
import { vars } from '@/styles/theme.css';

export const tableHeaderContainer = style([
	sprinkles({
		bgColor: 'background-1',
	}),
	typoVariant.heading[2],
	{
		overflowX: 'hidden',
		position: 'sticky',
		top: 114,
		zIndex: 10,
		borderBottom: `1px solid ${vars.semantic.color.border.default}`,
	},
]);

export const tableBodyContainer = style([
	{
		overflowX: 'scroll',
	},
]);

export const dataCellLeftFixed = style([
	sprinkles({
		paddingLeft: 'spacing-1000',
	}),
	{
		position: 'sticky',
		left: 0,
	},
]);

export const headerCellLeftFixed = style([
	sprinkles({
		paddingLeft: 'spacing-1000',
		bgColor: 'background-1',
	}),
	{
		position: 'sticky',
		left: 0,
		zIndex: 20,
	},
]);

export const cellClickable = style({
	cursor: 'pointer',
});

export const tableHeaderCellWrapper = style([
	sprinkles({
		padding: 'spacing-200',
	}),
	{
		borderRight: `1px solid ${vars.semantic.color.border.default}`,
	},
]);

export const tableHeaderCellBox = style([
	sprinkles({
		gap: 'spacing-100',
	}),
	{
		display: 'flex',
		alignItems: 'center',
	},
]);

export const tableBodyCellWrapper = style([
	sprinkles({
		padding: 'spacing-200',
	}),
	{
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		borderRight: `1px solid ${vars.semantic.color.border.default}`,
	},
]);

export const tableBodyCellBox = style([typoVariant.body[2]]);
