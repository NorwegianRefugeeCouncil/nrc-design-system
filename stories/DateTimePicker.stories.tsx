import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { DateTimePicker } from '../src';

const DateTimePickerMeta: ComponentMeta<typeof DateTimePicker> = {
  title: 'DateTimePicker',
  component: DateTimePicker,
};

export default DateTimePickerMeta;

const Template: ComponentStory<typeof DateTimePicker> = (args) => (
  <DateTimePicker />
);

export const DateTimePickerStory = Template.bind({});
