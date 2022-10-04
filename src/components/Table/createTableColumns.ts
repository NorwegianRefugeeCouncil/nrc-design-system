import { ColumnDef } from '@tanstack/react-table';

import { TableProps } from './types';

export const createTableColumns = <T extends Record<string, any>>({
  data,
  columnConfig,
  defaultColumnMinWidth,
}: Pick<
  TableProps<T>,
  'data' | 'columnConfig' | 'defaultColumnMinWidth'
>): ColumnDef<T>[] =>
  Object.keys(data[0]).map((key) => ({
    accessorKey: key,
    header: key,
    minSize: columnConfig ? columnConfig[key] : defaultColumnMinWidth,
  }));
