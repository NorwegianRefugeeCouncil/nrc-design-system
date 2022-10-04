import { Row } from '@tanstack/react-table';

type RowKeys<T> = keyof T;

export type TableProps<T extends Record<string, any>> = {
  data: T[];
  onRowClick: (row: Row<any>) => void;
  defaultColumnMinWidth?: number;
  columnConfig?: Partial<Record<RowKeys<T>, number>>;
};
