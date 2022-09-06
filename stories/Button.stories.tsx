import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button as ButtonNB } from 'native-base';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: ButtonNB,
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: 'Button Text'
    },
    colorScheme: {
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
      defaultValue: 'primary',
    },
    variant: {
      options: ["major", "minor"],
      control: { type: "inline-radio" },
      defaultValue: 'major'
    },
    isDisabled: {
      control: {type: 'boolean'},
      defaultValue: false
    },
    isHovered: {
      control: {type: 'boolean'},
      defaultValue: false
    },
    isFocused: {
      control: {type: 'boolean'},
      defaultValue: false
    },
    isPressed: {
      control: {type: 'boolean'},
      defaultValue: false
    }
  },
};

export default ButtonMeta;

const Template: ComponentStory<typeof ButtonNB> = (args) => (
  <ButtonNB {...args}>{args.text}</ButtonNB>
)

export const Button = Template.bind({});
