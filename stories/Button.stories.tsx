import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button as ButtonNB } from 'native-base';

import { Icon } from '../src/components';
import { IconNames } from '../src/types/icons';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: ButtonNB,
  argTypes: {
    text: {
      control: { type: 'text' },
      defaultValue: 'Button Text',
    },
    colorScheme: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
      defaultValue: 'primary',
    },
    variant: {
      options: ['major', 'minor', 'link'],
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
    iconName: {
      options: IconNames,
      control: { type: 'select' },
      defaultValue: 'Home',
    },
    hasIcon: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export default ButtonMeta;

const Template: ComponentStory<typeof ButtonNB> = ({ ...args }) => (
  <ButtonNB
    {...args}
    startIcon={
      args.hasIcon ? <Icon size="6" name={args.iconName} /> : undefined
    }
  >
    {args.text}
  </ButtonNB>
);

export const Button = Template.bind({});
