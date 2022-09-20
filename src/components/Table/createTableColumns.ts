import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

export const createTableColumns = (
  data: Record<string, any>[],
): ColumnDef<any>[] => {
  const columnHelper = createColumnHelper<any>();

  return Object.keys(data[0]).map((key) =>
    columnHelper.accessor(key, {
      header: key,
    }),
  );
};
