import { flexRender, Header } from '@tanstack/react-table';
import React, { useLayoutEffect, useRef } from 'react';
import { Flex, Text, Pressable } from 'native-base';
import { Dimensions, LayoutChangeEvent } from 'react-native';

import { Icon } from '../Icon/Icon';
import { IconNames } from '../../types/icons';

type Props<T> = {
  header: Header<T, any>;
  widths: number[];
  setWidths: React.Dispatch<React.SetStateAction<number[]>>;
};

export const TableHeader = <T extends Record<string, any>>({
  header,
  widths,
  setWidths,
}: Props<T>) => {
  const ref = useRef<HTMLElement>(null);
  const localWidths = widths;
  const context = header.getContext();

  const updateWidths = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    const headerWidth = widths[header.index];

    if (width === headerWidth) {
      return;
    }

    localWidths[header.index] = width || headerWidth;
    setWidths([...localWidths]);
  };

  return (
    <Pressable
      onPress={header.column.getToggleSortingHandler()}
      key={header.id}
      ref={ref}
      onLayout={updateWidths}
    >
      <Flex
        flexDirection="row"
        pr="8"
        justifyContent="space-between"
        alignItems="center"
        minWidth={header.column.columnDef.minSize}
      >
        <Text
          fontWeight="700"
          fontSize="xs"
          lineHeight="4xs"
          textTransform="capitalize"
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, context)}
        </Text>
        {{
          asc: <Icon name={IconNames.SortAsc} pl="8" />,
          desc: <Icon name={IconNames.SortDesc} pl="8" />,
        }[header.column.getIsSorted() as string] ?? (
          <Icon name={IconNames.SortAsc} pl="8" color="neutral.300" />
        )}
      </Flex>
    </Pressable>
  );
};
