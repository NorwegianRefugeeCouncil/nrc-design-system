import DTP from '@react-native-community/datetimepicker';
import { Box, Flex, Pressable, Text, Button } from 'native-base';
import React, { useState } from 'react';
import { Platform } from 'react-native';

import tokens from '../../tokens';
import { IconNames } from '../../types/icons';
import { IconButton } from '../IconButton/IconButton';

type Props = {
  date: Date;
};

export const DatePicker: React.FC<Props> = ({ date }) => {
  const [d, setDate] = useState(new Date(date));
  const [show, setShow] = React.useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <Flex justifyContent="flex-start">
      {Platform.OS === 'web' && (
        <input
          type="date"
          value={d.toDateString()}
          onChange={(e) => onChange(undefined, e.target.value)}
          style={{
            color: tokens.colors.neutral['500'],
            border: 1,
            borderColor: tokens.colors.neutral['300'],
            borderStyle: 'solid',
            borderRadius: 3,
            height: 50,
            fontSize: 16,
            lineHeight: 50,
            paddingRight: 10,
            paddingLeft: 10,
          }}
        />
      )}
      {Platform.OS === 'android' && (
        <Box>
          <IconButton
            icon={IconNames.Calendar}
            onPress={() => setShow(true)}
            colorScheme="primary"
            variant="major"
          />
          {show && (
            <DTP
              testID="datePicker"
              value={d}
              mode="date"
              onChange={onChange}
              display="calendar"
              style={{
                backgroundColor: tokens.colors.primary['500'],
              }}
            />
          )}
        </Box>
      )}
      {Platform.OS === 'ios' && (
        <Box>
          <Button
            onPress={() => setShow(true)}
            colorScheme="primary"
            variant="major"
          >
            show
          </Button>
          {show && (
            <DTP
              testID="datePicker"
              value={d}
              mode="date"
              onChange={onChange}
              display="inline"
              textColor={tokens.colors.neutral['300']}
              // accentColor={tokens.colors.primary['500']}
              style={{
                backgroundColor: tokens.colors.primary['500'],
                // color: theme.colors.neutral['500'],
              }}
            />
          )}
        </Box>
      )}
    </Flex>
  );
};
