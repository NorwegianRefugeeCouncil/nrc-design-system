import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Button as ButtonNRC } from '../src/components';
import { IconNames, ActivityIconNames } from '../src/types/icons';

const argTypes = {
  text: {
    control: { type: 'text' },
    defaultValue: 'Button Text',
  },
  colorScheme: {
    options: ['primary', 'secondary'],
    control: { type: 'radio' },
    defaultValue: 'primary',
  },
  variant: {
    options: ['major', 'minor', 'link'],
    control: { type: 'radio' },
    defaultValue: 'major',
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
  isPressed: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  icon: {
    options: [
      ...Object.keys(IconNames),
      ...Object.keys(ActivityIconNames),
      null,
    ],
    control: { type: 'select' },
    defaultValue: null,
  },
};

const ButtonMeta: ComponentMeta<typeof ButtonNRC> = {
  title: 'Components/Buttons/Button',
  component: ButtonNRC,
  argTypes,
};

export default ButtonMeta;

const Template: ComponentStory<typeof ButtonNRC> = ({ icon, ...args }) => (
  <ButtonNRC {...args} icon={icon || undefined} />
);

export const Button = Template.bind({});
