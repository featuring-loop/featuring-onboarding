import React from 'react';
import { typoVariant } from '@/styles/typography.css';
import { IconArrowDownOutline, IconArrowUpOutline } from '@featuring-corp/icons';
import clsx from 'clsx';
import { sprinkles } from '@/styles/sprinkles.css';
import { flex } from '@/styles/recipe.css';
import * as styles from '@/components/discover/feature/discoverTable.css';
import { columnSeparateBorder } from '@/components/discover/feature/discoverTable.css';

interface TableHeaderProps {
	title: string;
	sortable?: boolean;
	sortBy?: string;
	currentSortBy?: string;
	currentOrder?: 'asc' | 'desc';
	onSort?: (sortBy: string) => void;
	isFirstColumn?: boolean;
}

export default function HeaderCellWrapper({
	title,
	sortable = false,
	sortBy,
	currentSortBy,
	currentOrder,
	onSort,
	isFirstColumn = false,
}: TableHeaderProps) {
	const isActive = sortable && sortBy === currentSortBy;

	return (
		<div
			className={clsx(
				typoVariant.heading[2],
				sprinkles({
					color: 'text-2',
					paddingX: 'spacing-200',
				}),
				{
					[styles.columnSeparateBorder]: isFirstColumn,
					[styles.regularColumnBorder]: !isFirstColumn,
				},
			)}
			style={{
				cursor: sortable ? 'pointer' : 'default',
			}}
			onClick={() => sortable && sortBy && onSort?.(sortBy)}
		>
			<div
				className={flex({ align: 'center', gap: 'spacing-100' })}
				style={{
					height: '38px',
				}}
			>
				<span>{title}</span>
				{sortable && isActive && (currentOrder === 'desc' ? <IconArrowDownOutline /> : <IconArrowUpOutline />)}
			</div>
		</div>
	);
}
