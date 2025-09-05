import * as styles from '@/components/discover/feature/discoverTable.css';
import clsx from 'clsx';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { sprinkles } from '@/styles/sprinkles.css';
import { flex } from '@/styles/recipe.css';
import HeaderCellWrapper from './table/HeaderCellWrapper';
import BodyCellWrapper from './table/BodyCellWrapper';

const tableHeaders = [
	{ name: '계정', size: 330 },
	{ name: '팔로워 수', size: 220 },
	{ name: '예상 유효 팔로워 수', size: 220 },
	{ name: '예상 평균 도달 수', size: 220 },
	{ name: '평균 피드 좋아요 수', size: 220 },
	{ name: '오디언스 성별', size: 220 },
	{ name: '오디언스 나이', size: 220 },
];

interface SkeletonTableProps {
	rowCount?: number;
}

export default function SkeletonDiscoverTable({ rowCount = 5 }: SkeletonTableProps) {
	return (
		<>
			<div className={styles.tableHeaderContainer}>
				<table>
					<thead>
						<tr>
							{tableHeaders.map((header, index) => {
								const isFixed = index === 0;

								return (
									<th
										key={header.name}
										className={clsx({
											[styles.headerCellLeftFixed]: isFixed,
										})}
										style={{
											minWidth: `${header.size}px`,
											maxWidth: `${header.size}px`,
										}}
									>
										<HeaderCellWrapper title={header.name} isFirstColumn={isFixed} />
									</th>
								);
							})}
						</tr>
					</thead>
				</table>
			</div>

			<div className={styles.tableBodyContainer}>
				<table>
					<tbody>
						{Array.from({ length: rowCount }).map((_, rowIndex) => {
							const isEvenRow = rowIndex % 2 === 0;

							return (
								<tr
									key={`skeleton-row-${rowIndex}`}
									className={clsx({ [sprinkles({ bgColor: 'background-2' })]: isEvenRow })}
								>
									{tableHeaders.map((header, cellIndex) => {
										const isFixed = cellIndex === 0;

										return (
											<td
												key={`${header.name}-${rowIndex}`}
												className={clsx({
													[styles.dataCellLeftFixed]: isFixed,
													[sprinkles({ bgColor: 'background-2' })]: isEvenRow,
													[sprinkles({ bgColor: 'background-1' })]: !isEvenRow,
												})}
												style={{
													minWidth: `${header.size}px`,
													maxWidth: `${header.size}px`,
													verticalAlign: 'middle',
												}}
											>
												<BodyCellWrapper isFirstColumn={isFixed}>
													{cellIndex === 0 ? (
														<div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
															<Skeleton style={{ width: '32px', height: '32px', flexShrink: 0, borderRadius: '50%' }} />
															<div style={{ width: '100%' }}>
																<Skeleton style={{ marginBottom: '12px' }} />
																<Skeleton style={{ width: '80px' }} />
															</div>
														</div>
													) : (
														<Skeleton style={{ width: '100px' }} />
													)}
												</BodyCellWrapper>
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className={clsx(sprinkles({ padding: 'spacing-800' }), flex({ justify: 'between' }))}>
				<Skeleton style={{ width: '20%' }} />
				<Skeleton style={{ width: '40%' }} />
			</div>
		</>
	);
}
