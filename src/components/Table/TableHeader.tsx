import { flexRender, Header } from '@tanstack/react-table';
import React, { useLayoutEffect, useRef } from 'react';
import { Flex, Text, Pressable } from 'native-base';

import { Icon } from '../Icon/Icon';
import { IconNames } from '../../types/icons';

type Props = {
  header: Header<any, any>;
  widths: number[];
  setWidths: React.Dispatch<React.SetStateAction<number[]>>;
};

export const TableHeader: React.FC<Props> = ({
  header,
  widths,
  setWidths,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const localWidths = widths;

  useLayoutEffect(() => {
    const headerWidth = widths[header.index];
    if (ref?.current?.offsetWidth === headerWidth) {
      return;
    }

    localWidths[header.index] = ref?.current?.offsetWidth || headerWidth;
    setWidths([...localWidths]);
  }, [ref.current?.offsetWidth, header.column.columnDef]);

  return (
    <Pressable
      onPress={header.column.getToggleSortingHandler()}
      key={header.id}
      ref={ref}
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        minWidth={`${header.column.columnDef.minSize}px`}
      >
        <Text
          fontWeight="700"
          fontSize="xs"
          lineHeight="4xs"
          textTransform="capitalize"
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </Text>
        {{
          asc: <Icon name={IconNames.SortAsc} pl="8" />,
          desc: <Icon name={IconNames.SortDesc} pl="8" />,
        }[header.column.getIsSorted() as string] ?? <Icon name={IconNames.SortAsc} pl="8"  color={"neutral.200"}/>}
      </Flex>
    </Pressable>
  );
};
