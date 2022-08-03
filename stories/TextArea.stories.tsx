import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { FormControl, TextArea } from 'native-base';

const TextAreaMeta: ComponentMeta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
};

export default TextAreaMeta;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <FormControl>
    <FormControl.Label>Label</FormControl.Label>
    <TextArea {...args} />
    <FormControl.HelperText>Helper text</FormControl.HelperText>
  </FormControl>
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { isDisabled: true, value: 'TextArea value' };

export const Hovered = Template.bind({});
Hovered.args = { isHovered: true, value: 'TextArea value' };

export const Focused = Template.bind({});
Focused.args = { isFocused: true, value: 'TextArea value' };

export const Invalid = Template.bind({});
Invalid.args = { isInvalid: true, value: 'TextArea value' };

export const Password = Template.bind({});
Password.args = { type: 'password', value: 'TextArea value' };
