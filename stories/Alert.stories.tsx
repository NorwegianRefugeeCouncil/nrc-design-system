import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Alert } from 'native-base';

const AlertMeta: ComponentMeta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
};

export default AlertMeta;

const Template: ComponentStory<typeof Alert> = ({ variant, ...args }) => (
  <Alert
    variant={variant}
    {...args}
  >{`This is a notification of type ${variant}`}</Alert>
);

export const Info = Template.bind({});
Info.args = { variant: 'info' };

export const Success = Template.bind({});
Success.args = { variant: 'success' };

export const Error = Template.bind({});
Error.args = { variant: 'error' };
