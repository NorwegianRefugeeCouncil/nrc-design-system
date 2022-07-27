import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Icon as Ic, theme } from '../src';

const IconMeta: ComponentMeta<typeof Ic> = {
  title: 'Icons',
  component: Ic,
  argTypes: {
    color: {
      name: 'color',
      // type: 'select',
      // options: [
      //   theme.colors.icons.dark,
      //   theme.colors.icons.light,
      //   theme.colors.icons.link,
      // ],
      description: 'icon color',
      control: {
        type: 'color'
      }
    },
  },
};

export default IconMeta;

const Template: ComponentStory<typeof Ic> = (args) => <Ic {...args} />;

export const Icon = Template.bind({});
Icon.args = { size: '6', color: theme.colors.icons.link, name: 'Attachment' };
