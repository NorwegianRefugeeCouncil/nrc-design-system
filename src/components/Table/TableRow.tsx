import * as React from 'react';
import { Flex, Text, Pressable } from 'native-base';
import { flexRender, Row, Cell } from '@tanstack/react-table';

type Props<T> = {
  onRowClick: (row: Row<T>) => void;
  row: Row<T>;
  widths: number[];
};

export const TableRow = <T extends Record<string, any>>({
  row,
  onRowClick,
  widths,
}: Props<T>) => {
  const cells = row.getAllCells();

  const renderCell = (cell: Cell<T, unknown>, i: number) => {
    const context = cell.getContext();
    return (
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        key={cell.id}
        width={widths[i]}
        pr="8"
        pl="3"
      >
        <Text fontSize="2xs" lineHeight="3xs" py="4">
          {flexRender(cell.column.columnDef.cell, context)}
        </Text>
      </Flex>
    );
  };

  const onClick = () => onRowClick(row);

  return (
    <Pressable
      _hover={{ bg: 'primary.100' }}
      _pressed={{ bg: 'primary.200' }}
      onPress={onClick}
      key={row.id}
      borderBottomColor="neutral.300"
      borderBottomWidth="1"
    >
      <Flex
        alignItems="flex-start"
        borderBottomColor="neutral.200"
        flexDirection="row"
        justifyContent="flex-start"
        minHeight="12"
      >
        {cells.map(renderCell)}
      </Flex>
    </Pressable>
  );
};
