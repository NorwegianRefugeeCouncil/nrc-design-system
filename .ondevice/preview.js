import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { NativeBaseProvider } from 'native-base';
import { theme } from '../src';

export const parameters = {
  backgrounds: [
    {name: 'light', value: theme.colors.themeLight, default: true},
    {name: 'dark', value: theme.colors.themeDark}
  ],
};

export const decorators = [
  withBackgrounds,
  (Story) => (
    <NativeBaseProvider theme={theme}>
      <div
        style={{
          padding: '3em',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundColor: theme.colors.themeLight
        }}
      >
        <Story />
      </div> 
    </NativeBaseProvider>
  ),
];