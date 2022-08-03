import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Icon as Ic, theme } from '../src';
import { colorTokens } from '../src/tokens/colors';
import { IconNames } from '../src/types/icons';

const IconMeta: ComponentMeta<typeof Ic> = {
  title: 'Foundation/Icons/Single',
  component: Ic,
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: Object.values(colorTokens),
      },
    },
    name: {
      control: {
        type: 'select',
        options: IconNames,
        default: 'ActivityCamp',
      },
    },
  },
};

export default IconMeta;

const Template: ComponentStory<typeof Ic> = (args) => <Ic {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  size: '6',
  color: theme.colors.neutral[700],
  name: 'ActivityCamp',
};
