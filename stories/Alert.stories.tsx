import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Alert as AlertNB, Text } from 'native-base';
import { Pressable } from 'react-native';

import { IconNames } from '../src/types/icons';
import { Icon } from '../src/components';

const AlertMeta: ComponentMeta<typeof AlertNB> = {
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

const Template: ComponentStory<typeof AlertNB> = ({ ...args }) => (
  <AlertNB {...args}>
    {args.text}
    {args.isClosable && (
      <Pressable onPress={() => alert('close alert')}>
        <Icon size="5" name={IconNames.Close} />
      </Pressable>
    )}
  </AlertNB>
);

export const Alert = Template.bind({});
