import { useRouter } from 'next/router';

export const usePagination = () => {
  const router = useRouter();
  
  const currentPage = Number(router.query.page) || 1;
  const currentPageSize = Number(router.query.page_size) || 25;

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

  return {
    currentPage,
    currentPageSize,
    handlePageChange,
    handlePageSizeChange,
  };
};
