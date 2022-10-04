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
import { TableProps } from './types';

export const Table = <T extends Record<string, any>>({
  data,
  onRowClick,
  defaultColumnMinWidth = 80,
  columnConfig,
}: TableProps<T>) => {
  const columns = createTableColumns({
    data,
    columnConfig,
    defaultColumnMinWidth,
  });

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [widths, setWidths] = React.useState<number[]>([]);

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const headers = table.getFlatHeaders();
  const { rows } = table.getRowModel();

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
            />
          ))}
        </Flex>
        <FlatList
          data={rows}
          keyExtractor={(item) => item.id}
          renderItem={({ item: row }) => (
            <TableRow row={row} onRowClick={onRowClick} widths={widths} />
          )}
        />
      </Box>
    </ScrollView>
  );
};
