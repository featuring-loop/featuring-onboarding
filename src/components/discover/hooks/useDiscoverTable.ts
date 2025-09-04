import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { Influencer } from '@/components/discover/model/types';
import { TableColumns } from '@/components/discover/model/TableColumns';

export const useDiscoverTable = (tableData: Influencer[]) => {
  const table = useReactTable<Influencer>({
    data: tableData,
    columns: TableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return {
    table,
  };
};
