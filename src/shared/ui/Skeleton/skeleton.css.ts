import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const shimmer = keyframes({
	'0%': {
		backgroundPosition: '-200px 0',
	},
	'100%': {
		backgroundPosition: 'calc(200px + 100%) 0',
	},
});

export const baseSkeleton = style({
	background: `linear-gradient(90deg, ${vars.semantic.color.background[2]} 25%, ${vars.semantic.color.background[3]} 50%, ${vars.semantic.color.background[2]} 75%)`,
	backgroundSize: '200px 100%',
	animation: `${shimmer} 1.2s ease-in-out infinite`,
	borderRadius: '4px',
	height: '16px',
	width: '100%',
});
