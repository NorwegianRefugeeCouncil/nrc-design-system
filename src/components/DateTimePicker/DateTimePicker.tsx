import DTP, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Button, Text } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';


export const DateTimePickerNRC = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState<'date'|'time'>('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event: any, selectedDate: any) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode: any) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
      <View>
        <Button onPress={showDatepicker}>Show date picker!</Button>
        <Button onPress={showTimepicker}>Show time picker!</Button>
        <Text>selected: {date.toLocaleString()}</Text>
        {show && (
          <DTP
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
            display='spinner'
          />
        )}
      </View>
    );

}