import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { NativeBaseProvider, Flex } from 'native-base';
import { theme } from '../src';

export const parameters = {
  backgrounds: [
    { name: 'light', value: theme.colors.themeLight, default: true },
    { name: 'dark', value: theme.colors.themeDark }
  ],
};

export const decorators = [
  withBackgrounds,
  (Story) => {
    return (
      <NativeBaseProvider theme={theme}>
        <Story css={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', padding: '10px'}}/>
      </NativeBaseProvider>
    )
  }
];