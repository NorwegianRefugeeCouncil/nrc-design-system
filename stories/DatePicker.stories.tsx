import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { DatePicker as DatePickerNRC } from '../src/components';

const argTypes = { date: { control: 'date', defaultValue: new Date() } };

const DatePickerMeta: ComponentMeta<typeof DatePickerNRC> = {
  title: 'Components/DatePicker',
  component: DatePickerNRC,
  argTypes,
};

export default DatePickerMeta;

const Template: ComponentStory<typeof DatePickerNRC> = (args) => (
  <DatePickerNRC {...args} />
);

export const DatePicker = Template.bind({});
