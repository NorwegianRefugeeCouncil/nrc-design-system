import React from 'react';
import { NativeBaseProvider } from 'native-base';
import {
  Roboto_400Regular as Roboto400Regular,
  Roboto_400Regular_Italic as Roboto400RegularItalic,
  Roboto_500Medium as Roboto500Medium,
  Roboto_700Bold as Roboto700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import StorybookUIRoot from './.ondevice/Storybook';
import theme from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto400Regular,
    Roboto400RegularItalic,
    Roboto500Medium,
    Roboto700Bold,
  });

  return (
    fontsLoaded && (
      <NativeBaseProvider theme={theme}>
        <StorybookUIRoot />
      </NativeBaseProvider>
    )
  );
}
