import { Flex } from 'native-base';
import React, { useState } from 'react';
import { Platform } from 'react-native';

import { DatePickerAndroid } from './DatePickerAndroid';
import { DatePickerIOS } from './DatePickerIOS';
import { DatePickerWeb } from './DatePickerWeb';

type Props = {
  date: Date;
};

export const DatePicker: React.FC<Props> = ({ date }) => {
  const [d, setDate] = useState(new Date(date));

  const onChange = (date: any) => {
    setDate(date);
  };

  return (
    <Flex justifyContent="flex-start">
      {Platform.OS === 'android' && (
        <DatePickerAndroid date={d} onChange={onChange} />
        )}
      {Platform.OS === 'ios' && <DatePickerIOS date={d} onChange={onChange} />}
      {Platform.OS === 'web' && <DatePickerWeb date={d} onChange={onChange} />}
    </Flex>
  );
};
