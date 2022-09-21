import React from 'react';
import {
  getCoreRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Flex, ScrollView, FlatList, Box } from 'native-base';

import { createTableColumns } from './createTableColumns';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

type Props = {
  data: object[];
  onRowClick: (row: Row<any>) => void;
  minColumnWidth?: number;
};

export const Table: React.FC<Props> = ({
  data,
  onRowClick,
  minColumnWidth,
}) => {
  const columns = createTableColumns(data);
  const minWidth = minColumnWidth || 80;

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const [widths, setWidths] = React.useState<number[]>([]);

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    state: {
      sorting,
      rowSelection,
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const headers = table.getFlatHeaders();
  const rows = table.getRowModel().rows;

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Box>
        <Flex
          alignItems="center"
          borderBottomColor="neutral.300"
          borderBottomWidth="1"
          bgColor="secondary.100"
          flexDirection="row"
          justifyContent="flex-start"
          gap="8"
          height="9"
          px="3"
        >
          {headers.map((header) => (
            <TableHeader
              key={header.id}
              header={header}
              widths={widths}
              setWidths={setWidths}
              minWidth={minWidth}
            />
          ))}
        </Flex>
        <FlatList
          data={rows}
          keyExtractor={(item) => item.id}
          renderItem={({ item: row }) => (
            <TableRow
              row={row}
              onRowClick={onRowClick}
              widths={widths}
              minWidth={minWidth}
            />
          )}
        />
      </Box>
    </ScrollView>
  );
};
