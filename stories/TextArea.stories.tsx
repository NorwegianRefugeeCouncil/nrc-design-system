import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { TextArea as TextAreaNRC } from '../src/components';

const argTypes = {
  value: {
    control: { type: 'text' },
    defaultValue: 'TextArea Text',
  },
  label: {
    control: { type: 'text' },
    defaultValue: 'Label',
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
};

const TextAreaMeta: ComponentMeta<typeof TextAreaNRC> = {
  title: 'Components/Textarea',
  component: TextAreaNRC,
  argTypes,
};

export default TextAreaMeta;

const Template: ComponentStory<typeof TextAreaNRC> = (args) => (
  <TextAreaNRC {...args} />
);

export const Textarea = Template.bind({});
