import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button as ButtonNB } from 'native-base';

import { Icon } from '../src/components';
import { IconNames, ActivityIconNames } from '../src/types/icons';

const argTypes = {
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
    options: [...Object.keys(IconNames), ...Object.keys(ActivityIconNames)],
    control: { type: 'select' },
    defaultValue: 'Home',
  },
  hasIcon: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
};

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: ButtonNB,
  argTypes,
  parameters: {
    docs: {
      source: {
        code: `<Button\n  accessibilityLabel="${
          argTypes.text.defaultValue
        }"\n  colorScheme={'${argTypes.colorScheme.options.join(
          "'| '",
        )}'}\n  iconName={'${argTypes.iconName.options.join(
          "'| '",
        )}'}\n  variant={'${argTypes.variant.options.join(
          "'| '",
        )}'}\n  onPress={()=>...}\n>\n  ${
          argTypes.text.defaultValue
        }\n</Button>`,
      },
    },
  },
};

export default ButtonMeta;

const Template: ComponentStory<typeof ButtonNB> = ({ ...args }) => (
  <ButtonNB
    {...args}
    accessibilityLabel={args.text}
    accessible
    startIcon={args.hasIcon ? <Icon name={args.iconName} /> : undefined}
  >
    {args.text}
  </ButtonNB>
);

export const Button = Template.bind({});
