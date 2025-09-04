import { useRouter } from 'next/router';
import { SortBy, Order } from '@/components/discover/model/types';

export const useSorting = () => {
  const router = useRouter();
  
  const currentSortBy = router.query.sort_by as SortBy | undefined;
  const currentOrder = router.query.order as Order | undefined;

  const sortableColumns: Record<string, SortBy> = {
    follower: 'follower',
    real_follower: 'real_follower',
    avg_reach: 'avg_reach',
    avg_feed_like: 'avg_feed_like',
  };

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

  const getSortIcon = (columnId: string) => {
    const sortBy = sortableColumns[columnId];
    if (!sortBy || currentSortBy !== sortBy) return null;
    return currentOrder === 'desc' ? 'down' : 'up';
  };

  return {
    currentSortBy,
    currentOrder,
    sortableColumns,
    handleSort,
    getSortIcon,
  };
};
