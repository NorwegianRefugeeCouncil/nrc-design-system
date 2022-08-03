import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Text, VStack } from 'native-base';

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'Foundation/Text',
  component: Text,
};

export default TextMeta;

const Template: ComponentStory<typeof Text> = ({ variant, level, ...args }) => (
  <Text variant={variant} level={level} {...args}>
    This is a text with variant {variant} and level {level}
  </Text>
);

export const DisplayLevel1 = Template.bind({});
DisplayLevel1.args = { variant: 'display', level: '1' };

export const DisplayLevel2 = Template.bind({});
DisplayLevel2.args = { variant: 'display', level: '2' };

export const HeadingLevel1 = Template.bind({});
HeadingLevel1.args = { variant: 'heading', level: '1' };

export const HeadingLevel2 = Template.bind({});
HeadingLevel2.args = { variant: 'heading', level: '2' };

export const HeadingLevel3 = Template.bind({});
HeadingLevel3.args = { variant: 'heading', level: '3' };

export const HeadingLevel4 = Template.bind({});
HeadingLevel4.args = { variant: 'heading', level: '4' };

export const HeadingLevel5 = Template.bind({});
HeadingLevel5.args = { variant: 'heading', level: '5' };

export const BodyLevel1 = Template.bind({});
BodyLevel1.args = { variant: 'body', level: '1' };

export const BodyLevel2 = Template.bind({});
BodyLevel2.args = { variant: 'body', level: '2' };

export const Caption = Template.bind({});
Caption.args = { variant: 'caption', level: '1' };

export const Inline = Template.bind({});
Inline.args = { variant: 'inline', level: '1' };

export const Label = Template.bind({});
Label.args = { variant: 'label', level: '1' };
