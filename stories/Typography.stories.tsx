import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Text, VStack } from 'native-base';

const TypographyMeta: ComponentMeta<typeof VStack> = {
  title: 'Foundation/Typography',
  component: VStack,
  subcomponents: { Text },
};

export default TypographyMeta;

export const Typography = (args) => (
  <VStack {...args} space="2">
    <Text variant="display" level="1">
      Display Level 1
    </Text>
    <Text variant="display" level="2">
      Display Level 2
    </Text>
    <Text variant="heading" level="1">
      Heading Level 1
    </Text>
    <Text variant="heading" level="2">
      Heading Level 2
    </Text>
    <Text variant="heading" level="3">
      Heading Level 3
    </Text>
    <Text variant="heading" level="4">
      Heading Level 4
    </Text>
    <Text variant="heading" level="5">
      Heading Level 5
    </Text>
    <Text variant="body" level="1">
      Body Level 1
    </Text>
    <Text variant="body" level="2">
      Body Level 2
    </Text>
    <Text variant="caption" level="1">
      Caption
    </Text>
    <Text variant="inline" level="1">
      Inline
    </Text>
    <Text variant="label" level="1">
      Label
    </Text>
  </VStack>
);
