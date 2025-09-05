import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import { CorePagination, CoreSelectPrim } from '@featuring-corp/components';
import { useDiscoverQuery } from '@/components/discover/hooks/useDiscoverQuery';
import { useDiscoverTable } from '@/components/discover/hooks/useDiscoverTable';
import { usePagination } from '@/components/discover/hooks/usePagination';
import { useTableScroll } from '@/components/discover/hooks/useTableScroll';
import { useSorting } from '@/components/discover/hooks/useSorting';
import { Influencer, DiscoverResponse, SortBy } from '@/components/discover/model/types';
import * as styles from '@/components/discover/feature/discoverTable.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { flex } from '@/styles/recipe.css';

export default function DiscoverTable() {
	const { currentPage, currentPageSize, handlePageChange, handlePageSizeChange } = usePagination();
	const { currentSortBy, currentOrder, handleSort } = useSorting();
	const { headerContainerRef, bodyContainerRef } = useTableScroll();

	const { data } = useDiscoverQuery({
		sort_by: currentSortBy,
		order: currentOrder,
		page: currentPage,
		page_size: currentPageSize,
	});

	const tableData: Influencer[] = (data as DiscoverResponse).data;
	const { table } = useDiscoverTable({
		tableData,
		currentSortBy,
		currentOrder,
		onSort: (sortBy: string) => handleSort(sortBy as SortBy),
	});

	return (
		<>
			<div ref={headerContainerRef} className={styles.tableHeaderContainer}>
				<table>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header, index) => {
									const isFixed = index === 0;

									return (
										<th
											key={header.id}
											className={clsx({
												[styles.headerCellLeftFixed]: isFixed,
											})}
											style={{
												minWidth: `${header.getSize()}px`,
												maxWidth: `${header.getSize()}px`,
											}}
										>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
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
								<tr key={row.id}>
									{row.getVisibleCells().map((cell, index) => {
										const isFixed = index === 0;

										return (
											<td
												key={cell.id}
												className={clsx({
													[styles.dataCellLeftFixed]: isFixed,
													[sprinkles({ bgColor: 'background-2' })]: isEvenRow,
													[sprinkles({ bgColor: 'background-1' })]: !isEvenRow,
												})}
												style={{
													minWidth: `${cell.column.getSize()}px`,
													maxWidth: `${cell.column.getSize()}px`,
													verticalAlign: 'middle',
												}}
											>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
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
