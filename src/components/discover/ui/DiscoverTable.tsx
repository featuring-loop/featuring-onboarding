import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { tableColumns } from '@/components/discover/model/tableColumns';
import { useDiscoverQuery } from '@/components/discover/hooks/useDiscoverQuery';
import { Influencer, DiscoverResponse, SortBy, Order } from '@/components/discover/model/types';
import { useRouter } from 'next/router';
import { IconArrowDownOutline, IconArrowUpOutline } from '@featuring-corp/icons';
import * as styles from '@/components/discover/feature/discoverTable.css';
import clsx from 'clsx';
import { CorePagination, CoreSelect, CoreSelectItem } from '@featuring-corp/components';

export default function DiscoverTable() {
	const router = useRouter();

	const currentSortBy = router.query.sort_by as SortBy | undefined;
	const currentOrder = router.query.order as Order | undefined;
	const currentPage = Number(router.query.page) || 1;
	const currentPageSize = Number(router.query.page_size) || 25;

	const { data } = useDiscoverQuery({
		sort_by: currentSortBy,
		order: currentOrder,
		page: currentPage,
		page_size: currentPageSize,
	});

	const tableData: Influencer[] = (data as DiscoverResponse).data;

	const table = useReactTable<Influencer>({
		data: tableData,
		columns: tableColumns,
		getCoreRowModel: getCoreRowModel(),
	});

	const handleSort = (column: SortBy) => {
		const newQuery: Record<string, any> = { ...router.query };

		if (currentSortBy === column) {
			if (currentOrder === 'desc') {
				newQuery.order = 'asc';
			}
			if (currentOrder === 'asc') {
				delete newQuery.sort_by;
				delete newQuery.order;
			}
		} else {
			newQuery.sort_by = column;
			newQuery.order = 'desc';
		}

		router.push(
			{
				pathname: router.pathname,
				query: newQuery,
			},
			undefined,
			{ shallow: true },
		);
	};

	const sortableColumns: Record<string, SortBy> = {
		follower: 'follower',
		real_follower: 'real_follower',
		avg_reach: 'avg_reach',
		avg_feed_like: 'avg_feed_like',
	};

	const getSortIcon = (columnId: string) => {
		const sortBy = sortableColumns[columnId];
		if (!sortBy || currentSortBy !== sortBy) return null;
		return currentOrder === 'desc' ? <IconArrowDownOutline /> : <IconArrowUpOutline />;
	};

	const handlePageChange = (page: number) => {
		const newQuery: Record<string, any> = { ...router.query, page: page.toString() };

		router.push(
			{
				pathname: router.pathname,
				query: newQuery,
			},
			undefined,
			{ shallow: true },
		);
	};

	const handlePageSizeChange = (pageSize: string) => {
		const newQuery: Record<string, any> = { ...router.query, page_size: pageSize };
		if (newQuery.page && Number(newQuery.page) > 1) {
			newQuery.page = '1';
		}

		router.push(
			{
				pathname: router.pathname,
				query: newQuery,
			},
			undefined,
			{ shallow: true },
		);
	};

	return (
		<>
			<div className={styles.tableContainer}>
				<table className={styles.table}>
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
												[styles.headerCellFixed]: isFixed,
												[styles.headerCellClickable]: isClickable,
											})}
											style={{
												width: `${header.getSize()}px`,
												minWidth: `${header.getSize()}px`,
												maxWidth: `${header.getSize()}px`,
											}}
										>
											<div
												className={clsx(styles.headerContent, {
													[styles.headerContentFixed]: isFixed,
												})}
											>
												{header.isPlaceholder ? null : (
													<div className={styles.headerIconContainer}>
														{flexRender(header.column.columnDef.header, header.getContext())}
														{getSortIcon(header.column.id)}
													</div>
												)}
											</div>
										</th>
									);
								})}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row, rowIndex) => (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell, index) => {
									const isFixed = index === 0;
									const isEvenRow = rowIndex % 2 === 0;

									return (
										<td
											key={cell.id}
											className={clsx({
												[styles.dataCellFixed]: isFixed,
												[styles.dataCellRegular]: !isFixed,
												[styles.backgroundWhite]: isEvenRow,
												[styles.backgroundGray]: !isEvenRow,
											})}
											style={{
												width: `${cell.column.getSize()}px`,
												minWidth: `${cell.column.getSize()}px`,
												maxWidth: `${cell.column.getSize()}px`,
											}}
										>
											<div
												className={clsx(styles.dataCellContent, {
													[styles.dataCellContentFixed]: isFixed,
												})}
											>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</div>
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', padding: '32px' }}>
				<CoreSelect
					size="lg"
					defaultValue={currentPageSize.toString()}
					secondaryLabel="/ page"
					width="140px"
					optionPlacement="top"
					setValue={handlePageSizeChange}
				>
					<CoreSelectItem value="5">5명</CoreSelectItem>
					<CoreSelectItem value="10">10명</CoreSelectItem>
					<CoreSelectItem value="25">25명</CoreSelectItem>
					<CoreSelectItem value="50">50명</CoreSelectItem>
				</CoreSelect>
				<CorePagination
					totalPage={(data as DiscoverResponse).total}
					activePage={(data as DiscoverResponse).page}
					onPageChange={handlePageChange}
				/>
			</div>
		</>
	);
}
