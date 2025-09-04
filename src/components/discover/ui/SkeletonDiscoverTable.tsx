import * as styles from '@/components/discover/feature/discoverTable.css';
import clsx from 'clsx';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { sprinkles } from '@/styles/sprinkles.css';

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
										<div className={clsx(styles.tableHeaderCellWrapper)}>
											<div className={styles.tableHeaderCellBox}>{header.name}</div>
										</div>
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
													[sprinkles({ bgColor: 'background-2' })]: isFixed && isEvenRow,
													[sprinkles({ bgColor: 'background-1' })]: isFixed && !isEvenRow,
												})}
												style={{
													minWidth: `${header.size}px`,
													maxWidth: `${header.size}px`,
													height: '56px',
													verticalAlign: 'middle',
												}}
											>
												<div className={clsx(styles.tableBodyCellWrapper)}>
													<div className={clsx(styles.tableBodyCellBox)} style={{ width: '100%' }}>
														{cellIndex === 0 ? (
															<div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
																<Skeleton
																	style={{ width: '32px', height: '32px', flexShrink: 0, borderRadius: '50%' }}
																/>
																<div style={{ width: '100%' }}>
																	<Skeleton style={{ marginBottom: '12px' }} />
																	<Skeleton style={{ width: '80px' }} />
																</div>
															</div>
														) : (
															<Skeleton />
														)}
													</div>
												</div>
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', padding: '32px' }}>
				<Skeleton style={{ width: '20%' }} />
				<Skeleton style={{ width: '40%' }} />
			</div>
		</>
	);
}
