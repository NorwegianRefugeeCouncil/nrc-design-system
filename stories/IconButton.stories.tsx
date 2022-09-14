import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { IconButton as IconButtonNB } from 'native-base';

import { Icon } from '../src/components';
import { IconNames } from '../src/types/icons';

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
  iconName: {
    options: Object.keys(IconNames),
    control: { type: 'select' },
    defaultValue: 'Home',
  },
};

const IconButtonMeta: ComponentMeta<typeof IconButton> = {
  title: 'Components/Buttons/IconButton',
  component: IconButtonNB,
  argTypes,
  parameters: {
    docs: {
      source: {
        code: `<IconButton\n  colorScheme={'${argTypes.colorScheme.options.join(
          "'| '",
        )}'}\n  iconName={'${argTypes.iconName.options.join(
          "'| '",
        )}'}\n  variant={'${argTypes.variant.options.join(
          "'| '",
        )}'}\n  onPress={()=>...}/>`,
      },
    },
  },
};

export default IconButtonMeta;

const Template: ComponentStory<typeof IconButtonNB> = ({ ...args }) => (
  <IconButtonNB {...args} icon={<Icon size="5" name={args.iconName} />} />
);

export const IconButton = Template.bind({});
