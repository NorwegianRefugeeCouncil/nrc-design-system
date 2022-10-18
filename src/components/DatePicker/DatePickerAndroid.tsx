import { Box, Flex, Text } from 'native-base';
import React from 'react';
import DTP from '@react-native-community/datetimepicker';

import tokens from '../../tokens';
import { IconNames } from '../../types/icons';
import { IconButton } from '../IconButton/IconButton';

type Props = {
  date: Date;
  onChange: (date: any) => void;
};

export const DatePickerAndroid: React.FC<Props> = ({ date, onChange }) => {
  const [show, setShow] = React.useState(false);

  const onChangeLocal = (event: any, date: any) => {
    console.log('DatePickerAndroid', event, event.nativeEvent, date)
    setShow(false);
    onChange(date);
  }

  return (
    <Box position="relative">
      {!show && (
        <Flex flexDirection="row" alignItems="center">
          <Text mr="4">{date.toLocaleDateString()}</Text>
          <IconButton
            icon={IconNames.Calendar}
            onClick={() => setShow(true)}
            colorScheme="primary"
            variant="major"
            altText="Calendar"
          />
        </Flex>
      )}
      {show && (
        <DTP
          testID="datePicker"
          value={date}
          mode="date"
          onChange={onChangeLocal}
          display="calendar"

          style={{
            backgroundColor: tokens.colors.primary['500'],
          }}
        />
      )}
    </Box>
  );
};
