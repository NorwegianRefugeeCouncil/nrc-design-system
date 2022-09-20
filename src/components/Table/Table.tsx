import * as React from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {
  Flex,
  HStack,
  ScrollView,
  FlatList,
  Text,
  Box,
  Pressable,
} from 'native-base';

import { Icon } from '../Icon/Icon';
import { IconNames } from '../../types/icons';

import { createTableColumns } from './createTableColumns';

type Props = {
  data: object[];
  onItemClick: (item: any) => void;
};

export const Table: React.FC<Props> = ({ data, onItemClick }) => {
  const columns = createTableColumns(data);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    state: {
      sorting,
      rowSelection,
    },
    onColumnSizingChange: (a: any)=>{
      console.log('onColumnSizingChange', a)
    },
    onColumnSizingInfoChange: (a: any)=>{
      console.log('onColumnSizingInfoChange', a)
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  const headers = table.getFlatHeaders();
  const sizes = headers.map((h)=> h.getSize())
  React.useEffect(()=>{
    headers.forEach((h)=>h.getResizeHandler())
  },[headers])

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Box width={table.getCenterTotalSize()}>
        <Flex
          borderBottomColor="neutral.300"
          borderBottomWidth="1"
          bgColor="secondary.100"
          height="9"
          px="3"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          gap="8"
        >
          {headers.map((header, i) => (
            <Pressable
              onPress={header.column.getToggleSortingHandler()}
              key={header.id}
              width={header.getSize()}
            >
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  fontWeight="700"
                  fontSize="xs"
                  lineHeight="4xs"
                  textTransform="capitalize"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Text>
                {{
                  asc: <Icon name={IconNames.SortAsc} pl="8" />,
                  desc: <Icon name={IconNames.SortDesc} pl="8" />,
                }[header.column.getIsSorted() as string] ?? null}
              </Flex>
            </Pressable>
          ))}
        </Flex>
        <FlatList
          data={table.getRowModel().rows}
          renderItem={({ item: row }) => (
            <Pressable
              _hover={{ bg: 'primary.100' }}
              _pressed={{ bg: 'primary.200' }}
              onPress={onItemClick}
              key={row.id}
            >
              <HStack>
                {row.getVisibleCells().map((cell, i) => {
  // console.log(sizes, headers[0].column.getSize())
  console.log('SIZING', table.getState().columnSizing)

                  return (
                  <Flex
                    borderBottomColor="neutral.200"
                    borderBottomWidth="1"
                    key={cell.id}
                    // width={sizes[i]}
                    width={cell.column.getSize()}
                    px="3"
                    minHeight="12"
                    justifyContent="flex-start"
                  >
                    <Text fontSize="2xs" lineHeight="3xs" py="4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Text>
                  </Flex>
                )})}
              </HStack>
            </Pressable>
          )}
        />
      </Box>
    </ScrollView>
  );
};
