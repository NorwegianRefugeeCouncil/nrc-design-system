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

export const DatePickerIOS: React.FC<Props> = ({ date, onChange }) => {
  const [show, setShow] = React.useState(false);

  const onChangeLocal = (event: any, date: any) => {
    onChange(date);
    setShow(false);
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
          themeVariant="light"
          mode="date"
          onChange={onChangeLocal}
          display="inline"
          textColor="#387456"
          // style={{
          //   // shadowColor: '#000000',
          //   // shadowRadius: 0,
          //   // shadowOpacity: 1,
          //   // shadowOffset: { height: 0, width: 0 }
          //   backgroundColor: tokens.colors.neutral['200'],
          //   position: 'relative',
          //   top: 10,
          // }}
        />
      )}
    </Box>
  );
};
