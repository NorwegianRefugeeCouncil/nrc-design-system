import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { FormControl, TextArea as TextAreaNB } from 'native-base';

const argTypes = {
  value: {
    control: { type: 'text' },
    defaultValue: 'TextArea Text',
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
};

const TextAreaMeta: ComponentMeta<typeof TextAreaNB> = {
  title: 'Components/Textarea',
  component: TextAreaNB,
  argTypes,
  parameters: {
    docs: {
      source: {
        code: `
<FormControl>
  <FormControl.Label>Label</FormControl.Label>
  <Textarea
    ${Object.keys(argTypes)
      .map((arg) => `${arg}="${argTypes[arg].defaultValue}"`)
      .join('\n    ')}
  />
</FormControl>`,
      },
    },
  },
};

export default TextAreaMeta;

const Template: ComponentStory<typeof TextAreaNB> = (args) => (
  <FormControl>
    <FormControl.Label>Label</FormControl.Label>
    <TextAreaNB {...args} />
  </FormControl>
);

export const Textarea = Template.bind({});
