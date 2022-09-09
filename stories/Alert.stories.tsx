import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Alert as AlertNB } from 'native-base';

import { Notification } from '../src/components';

const AlertMeta: ComponentMeta<typeof Notification> = {
  title: 'Components/Alert',
  component: AlertNB,
  argTypes: {
    text: {
      control: { type: 'text' },
      defaultValue: 'This is an alert',
    },
    variant: {
      options: ['error', 'info', 'success'],
      control: { type: 'inline-radio' },
      defaultValue: 'error',
    },
    isClosable: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
};

export default AlertMeta;

const Template: ComponentStory<typeof Notification> = ({ ...args }) => (
  <Notification {...args} />
);

export const Alert = Template.bind({});
