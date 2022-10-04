import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Input as InputNRC } from '../src/components';

const argTypes = {
  value: {
    control: { type: 'text' },
    defaultValue: 'Input Text',
  },
  label: {
    control: { type: 'text' },
    defaultValue: 'Label',
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
};

const InputMeta: ComponentMeta<typeof InputNRC> = {
  title: 'Components/Input',
  component: InputNRC,
  argTypes,
};

export default InputMeta;

const Template: ComponentStory<typeof InputNRC> = ({ ...args }) => (
  <InputNRC {...args} />
);

export const Input = Template.bind({});
