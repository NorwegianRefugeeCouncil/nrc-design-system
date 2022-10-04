import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { IconButton as IconButtonNRC } from '../src/components';
import { ActivityIconNames, IconNames } from '../src/types/icons';

const argTypes = {
  colorScheme: {
    options: ['primary', 'secondary'],
    control: { type: 'inline-radio' },
    defaultValue: 'primary',
  },
  variant: {
    options: ['major', 'minor'],
    control: { type: 'inline-radio' },
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
    options: [...Object.keys(IconNames), ...Object.keys(ActivityIconNames)],
    control: { type: 'select' },
    defaultValue: IconNames.Home,
  },
  altText: {
    control: { type: 'text' },
    defaultValue: 'accessibility label',
  },
};

const IconButtonMeta: ComponentMeta<typeof IconButtonNRC> = {
  title: 'Components/Buttons/Icon Button',
  component: IconButtonNRC,
  argTypes,
};

export default IconButtonMeta;

const Template: ComponentStory<typeof IconButtonNRC> = ({ icon, ...args }) => (
  <IconButtonNRC {...args} icon={icon} />
);

export const IconButton = Template.bind({});
