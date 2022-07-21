import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button } from 'native-base';

const MyButtonMeta: ComponentMeta<typeof Button> = {
  title: 'MyButton2',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    variant: 'major',
    colorScheme: 'secondary',
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof Button>;

export const Basic: MyButtonStory = (args) => <Button {...args}>Button</Button>;
