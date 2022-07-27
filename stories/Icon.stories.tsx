import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Icon as Ic } from '../src';

const IconMeta: ComponentMeta<typeof Ic> = {
  title: 'Icons',
  component: Ic,
};

export default IconMeta;

const Template: ComponentStory<typeof Ic> = (args) => <Ic {...args} />;

export const Icon = Template.bind({});
Icon.args = { size: '5', name: 'Delete' };
