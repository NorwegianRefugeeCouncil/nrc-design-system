import React from 'react';
import { ComponentMeta } from '@storybook/react-native';
import { HStack, VStack, Text } from 'native-base';

import { Icon, theme } from '../src';
import { colorTokens } from '../src/tokens/colors';

const IconMeta: ComponentMeta<typeof HStack> = {
  title: 'Foundation/Icons/All',
  component: HStack,
  subcomponents: {
    Icon,
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: Object.values(colorTokens),
      },
    },
  },
};

export default IconMeta;

export const AllIcons = (args) => (
  <VStack {...args} space="4" flexWrap="wrap">
    <Text variant="heading" level="1">
      Activity
    </Text>
    <HStack {...args} space="4" flexWrap="wrap">
      <VStack space="2">
        <Icon name="ActivityCamp" {...args} />
        <Text variant="caption">ActivityCamp</Text>
      </VStack>
      <VStack space="2">
        <Icon name="ActivityEducation" {...args} />
        <Text variant="caption">ActivityEducation</Text>
      </VStack>
      <VStack space="2">
        <Icon name="ActivityFood" {...args} />
        <Text variant="caption">ActivityFood</Text>
      </VStack>
      <VStack space="2">
        <Icon name="ActivityIcla" {...args} />
        <Text variant="caption">ActivityIcla</Text>
      </VStack>
      <VStack space="2">
        <Icon name="ActivityShelter" {...args} />
        <Text variant="caption">ActivityShelter</Text>
      </VStack>
      <VStack space="2">
        <Icon name="ActivityWash" {...args} />
        <Text variant="caption">ActivityWash</Text>
      </VStack>
    </HStack>
    <Text variant="heading" level="1">
      Remix Icons
    </Text>
    <HStack {...args} space="4" flexWrap="wrap">
      <VStack space="2">
        <Icon name="Calendar" {...args} />
        <Text variant="caption">Calendar</Text>
      </VStack>
      <VStack space="2">
        <Icon name="Close" {...args} />
        <Text variant="caption">Close</Text>
      </VStack>
      <VStack space="2">
        <Icon name="FileText" {...args} />
        <Text variant="caption">FileText</Text>
      </VStack>
      <VStack space="2">
        <Icon name="Home" {...args} />
        <Text variant="caption">Home</Text>
      </VStack>
      <VStack space="2">
        <Icon name="Mail" {...args} />
        <Text variant="caption">Mail</Text>
      </VStack>
      <VStack space="2">
        <Icon name="Search" {...args} />
        <Text variant="caption">Search</Text>
      </VStack>
      <VStack space="2">
        <Icon name="SortAsc" {...args} />
        <Text variant="caption">SortAsc</Text>
      </VStack>
      <VStack space="2">
        <Icon name="SortDesc" {...args} />
        <Text variant="caption">SortDesc</Text>
      </VStack>
      <VStack space="2">
        <Icon name="Upload" {...args} />
        <Text variant="caption">Upload</Text>
      </VStack>
    </HStack>
  </VStack>
);

AllIcons.args = { size: '6', color: theme.colors.neutral[700] };
