import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { FormControl, Input as InputNB } from 'native-base';

const InputMeta: ComponentMeta<typeof InputNB> = {
  title: 'Components/Input',
  component: InputNB,
  argTypes: {
    value: {
      control: { type: 'text' },
      defaultValue: 'Input Text',
    },
    helperText: {
      control: { type: 'text' },
      defaultValue: 'This is a helpful explanation',
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isHovered: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isFocused: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isReadOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isInvalid: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    type: {
      options: ['text', 'password'],
      control: { type: 'inline-radio' },
      defaultValue: 'text',
    },
  },
};

export default InputMeta;

const Template: ComponentStory<typeof InputNB> = ({ ...args }) => (
  <FormControl>
    <FormControl.Label>Label</FormControl.Label>
    <InputNB {...args} />
    <FormControl.HelperText>{args.helperText}</FormControl.HelperText>
  </FormControl>
);

export const Input = Template.bind({});
