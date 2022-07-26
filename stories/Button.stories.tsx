import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button } from 'native-base';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
};

export default ButtonMeta;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button Text</Button>
);

export const PrimaryMajor = Template.bind({});
PrimaryMajor.args = { variant: 'major', colorScheme: 'primary' };

export const SecondaryMajor = Template.bind({});
SecondaryMajor.args = { variant: 'major', colorScheme: 'secondary' };

export const PrimaryMinor = Template.bind({});
PrimaryMinor.args = { variant: 'minor', colorScheme: 'primary' };

export const SecondaryMinor = Template.bind({});
SecondaryMinor.args = { variant: 'minor', colorScheme: 'secondary' };

export const MajorDisabled = Template.bind({});
MajorDisabled.args = {
  variant: 'major',
  colorScheme: 'secondary',
  isDisabled: true,
};

export const MinorDisabled = Template.bind({});
MinorDisabled.args = {
  variant: 'minor',
  colorScheme: 'secondary',
  isDisabled: true,
};
