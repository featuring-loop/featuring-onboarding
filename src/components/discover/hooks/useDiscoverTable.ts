import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { Influencer, SortBy, Order } from '@/components/discover/model/types';
import { createTableColumns } from '@/components/discover/ui/table/TableColumns';

interface UseDiscoverTableProps {
  tableData: Influencer[];
  currentSortBy?: SortBy;
  currentOrder?: Order;
  onSort?: (sortBy: string) => void;
}

export const useDiscoverTable = ({ 
  tableData, 
  currentSortBy, 
  currentOrder, 
  onSort 
}: UseDiscoverTableProps) => {
  const columns = createTableColumns({
    currentSortBy,
    currentOrder: currentOrder as 'asc' | 'desc',
    onSort,
  });

  const table = useReactTable<Influencer>({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return {
    table,
  };
};
