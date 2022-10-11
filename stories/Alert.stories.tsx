import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Alert as AlertNRC } from '../src/components';

const AlertMeta: ComponentMeta<typeof AlertNRC> = {
  title: 'Components/Alert',
  component: AlertNRC,
  argTypes: {
    text: {
      control: { type: 'text' },
      defaultValue: 'This is an alert',
    },
    variant: {
      options: ['error', 'info', 'success'],
      control: { type: 'radio' },
      defaultValue: 'error',
    },
    isClosable: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
};

export default AlertMeta;

const Template: ComponentStory<typeof AlertNRC> = ({ ...args }) => (
  <AlertNRC {...args} />
);

export const Alert = Template.bind({});
