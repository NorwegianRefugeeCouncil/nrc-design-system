// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { theme } from 'nrc-design-system';
import {
  Roboto_400Regular as Roboto400Regular,
  Roboto_400Regular_Italic as Roboto400RegularItalic,
  Roboto_500Medium as Roboto500Medium,
  Roboto_700Bold as Roboto700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import StorybookUIRoot from './storybook';

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
