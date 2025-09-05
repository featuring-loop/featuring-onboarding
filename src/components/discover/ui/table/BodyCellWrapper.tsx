import React, { ReactNode } from 'react';
import { clsx } from 'clsx';
import { sprinkles } from '@/styles/sprinkles.css';
import { flex } from '@/styles/recipe.css';
import * as styles from '@/components/discover/feature/discoverTable.css';
import { columnSeparateBorder } from '@/components/discover/feature/discoverTable.css';

interface CellWrapperProps {
	children: ReactNode;
	isFirstColumn?: boolean;
}

export default function BodyCellWrapper({ children, isFirstColumn = false }: CellWrapperProps) {
	return (
		<div
			className={clsx(
				sprinkles({
					paddingX: 'spacing-250',
				}),
				flex({ align: 'center' }),
				{
					[styles.columnSeparateBorder]: isFirstColumn,
					[styles.regularColumnBorder]: !isFirstColumn,
				},
			)}
			style={{
				height: '56px',
			}}
		>
			<div>{children}</div>
		</div>
	);
}
