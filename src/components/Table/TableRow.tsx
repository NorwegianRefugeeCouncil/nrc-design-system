import * as React from 'react';
import { Flex, Text, Pressable } from 'native-base';
import { flexRender, Row, Cell } from '@tanstack/react-table';

type Props = {
  onRowClick: (row: Row<any>) => void;
  row: Row<any>;
  widths: number[];
  minWidth: number;
};

export const TableRow: React.FC<Props> = ({
  row,
  onRowClick,
  widths,
  minWidth,
}) => {

  const cells = row.getAllCells();

  const renderCell = (cell: Cell<any, unknown>, i: number) => (
    <Flex
      flexDirection="row"
      justifyContent="flex-start"
      key={cell.id}
      width={`${widths[i]}px`}
      minWidth={`${minWidth}px`}
    >
      <Text fontSize="2xs" lineHeight="3xs" py="4">
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </Text>
    </Flex>
  );

  return (
    <Pressable
      _hover={{ bg: 'primary.100' }}
      _pressed={{ bg: 'primary.200' }}
      onPress={() => onRowClick(row)}
      key={row.id}
    >
      <Flex
        alignItems="flex-start"
        borderBottomColor="neutral.200"
        borderBottomWidth="1"
        flexDirection="row"
        gap="8"
        justifyContent="flex-start"
        minHeight="12"
        px="3"
      >
        {cells.map(renderCell)}
      </Flex>
    </Pressable>
  );
};
