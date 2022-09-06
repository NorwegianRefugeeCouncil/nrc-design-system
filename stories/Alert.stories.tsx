import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Alert as AlertNB } from 'native-base';

const AlertMeta: ComponentMeta<typeof AlertNB> = {
  title: 'Components/Alert',
  component: AlertNB,
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: 'This is an alert'
    },
    variant: {
      options: ["error", "info", "success"],
      control: { type: "inline-radio" },
      defaultValue: 'info'
    },
  },
};

export default AlertMeta;

const Template: ComponentStory<typeof AlertNB> = (args) => (
  <AlertNB {...args}>{args.text}</AlertNB>
);

export const Alert = Template.bind({});