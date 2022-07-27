import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { NativeBaseProvider } from 'native-base';
import { theme } from '../src';
import {
  Roboto_400Regular as Roboto400Regular,
  Roboto_400Regular_Italic as Roboto400RegularItalic,
  Roboto_500Medium as Roboto500Medium,
  Roboto_700Bold as Roboto700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

export const parameters = {
  backgrounds: [
    {name: 'light', value: theme.colors.themeLight, default: true},
    {name: 'dark', value: theme.colors.themeDark}
  ],
};

const themeAndFontDecorator = (Story) => {
  useFonts({
    Roboto400Regular,
    Roboto400RegularItalic,
    Roboto500Medium,
    Roboto700Bold,
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Story />
    </NativeBaseProvider>
  )
};


export const decorators = [
  withBackgrounds,
  (Story) => {
  
    return (
      <NativeBaseProvider theme={theme}>
        <Story />
      </NativeBaseProvider>
    )
  }
];