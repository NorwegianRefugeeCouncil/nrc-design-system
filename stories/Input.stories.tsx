import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { FormControl, Input } from 'native-base';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default InputMeta;

const Template: ComponentStory<typeof Input> = (args) => (
  <FormControl>
    <FormControl.Label>Label</FormControl.Label>
    <Input {...args} />
    <FormControl.HelperText>Helper text</FormControl.HelperText>
  </FormControl>
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { isDisabled: true, value: 'input value' };

export const Hovered = Template.bind({});
Hovered.args = { isHovered: true, value: 'input value' };

export const Focused = Template.bind({});
Focused.args = { isFocused: true, value: 'input value' };

export const Invalid = Template.bind({});
Invalid.args = { isInvalid: true, value: 'input value' };

export const Password = Template.bind({});
Password.args = { type: 'password', value: 'input value' };
