import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import { CorePagination, CoreSelectPrim } from '@featuring-corp/components';
import { useDiscoverQuery } from '@/components/discover/hooks/useDiscoverQuery';
import { useDiscoverTable } from '@/components/discover/hooks/useDiscoverTable';
import { usePagination } from '@/components/discover/hooks/usePagination';
import { useTableScroll } from '@/components/discover/hooks/useTableScroll';
import { useSorting } from '@/components/discover/hooks/useSorting';
import { Influencer, DiscoverResponse } from '@/components/discover/model/types';
import { IconArrowDownOutline, IconArrowUpOutline } from '@featuring-corp/icons';
import * as styles from '@/components/discover/feature/discoverTable.css';
import { sprinkles } from '@/styles/sprinkles.css';

export default function DiscoverTable() {
	const { currentPage, currentPageSize, handlePageChange, handlePageSizeChange } = usePagination();
	const { currentSortBy, currentOrder, sortableColumns, handleSort, getSortIcon } = useSorting();
	const { headerContainerRef, bodyContainerRef } = useTableScroll();

	const { data } = useDiscoverQuery({
		sort_by: currentSortBy,
		order: currentOrder,
		page: currentPage,
		page_size: currentPageSize,
	});

	const tableData: Influencer[] = (data as DiscoverResponse).data;
	const { table } = useDiscoverTable(tableData);

	const renderSortIcon = (columnId: string) => {
		const iconType = getSortIcon(columnId);
		if (!iconType) return null;
		return iconType === 'down' ? <IconArrowDownOutline /> : <IconArrowUpOutline />;
	};

	return (
		<>
			<div ref={headerContainerRef} className={styles.tableHeaderContainer}>
				<table>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header, index) => {
									const isClickable = sortableColumns[header.column.id];
									const isFixed = index === 0;

									return (
										<th
											key={header.id}
											onClick={() => isClickable && handleSort(sortableColumns[header.column.id])}
											className={clsx({
												[styles.headerCellLeftFixed]: isFixed,
												[styles.cellClickable]: isClickable,
											})}
											style={{
												minWidth: `${header.getSize()}px`,
												maxWidth: `${header.getSize()}px`,
											}}
										>
											<div className={clsx(styles.tableHeaderCellWrapper)}>
												{header.isPlaceholder ? null : (
													<div className={styles.tableHeaderCellBox}>
														{flexRender(header.column.columnDef.header, header.getContext())}
														{renderSortIcon(header.column.id)}
													</div>
												)}
											</div>
										</th>
									);
								})}
							</tr>
						))}
					</thead>
				</table>
			</div>

			<div ref={bodyContainerRef} className={styles.tableBodyContainer}>
				<table>
					<tbody>
						{table.getRowModel().rows.map((row, rowIndex) => {
							const isEvenRow = rowIndex % 2 === 0;

							return (
								<tr key={row.id} className={clsx({ [sprinkles({ bgColor: 'background-2' })]: isEvenRow })}>
									{row.getVisibleCells().map((cell, index) => {
										const isFixed = index === 0;

										return (
											<td
												key={cell.id}
												className={clsx({
													[styles.dataCellLeftFixed]: isFixed,
													[sprinkles({ bgColor: 'background-2' })]: isFixed && isEvenRow,
													[sprinkles({ bgColor: 'background-1' })]: isFixed && !isEvenRow,
												})}
												style={{
													minWidth: `${cell.column.getSize()}px`,
													maxWidth: `${cell.column.getSize()}px`,
													height: '56px',
													verticalAlign: 'middle',
												}}
											>
												<div className={clsx(styles.tableBodyCellWrapper)}>
													<div className={clsx(styles.tableBodyCellBox)}>
														{flexRender(cell.column.columnDef.cell, cell.getContext())}
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
				<CoreSelectPrim.Root
					size="lg"
					defaultValue={currentPageSize.toString()}
					width="140px"
					onValueChange={handlePageSizeChange}
				>
					<CoreSelectPrim.Trigger>
						<CoreSelectPrim.Value />
					</CoreSelectPrim.Trigger>
					<CoreSelectPrim.Content>
						<CoreSelectPrim.Item value="5">5명</CoreSelectPrim.Item>
						<CoreSelectPrim.Item value="10">10명</CoreSelectPrim.Item>
						<CoreSelectPrim.Item value="25">25명</CoreSelectPrim.Item>
						<CoreSelectPrim.Item value="50">50명</CoreSelectPrim.Item>
					</CoreSelectPrim.Content>
				</CoreSelectPrim.Root>
				<CorePagination
					totalPage={(data as DiscoverResponse).total}
					activePage={(data as DiscoverResponse).page}
					onPageChange={handlePageChange}
				/>
			</div>
		</>
	);
}
