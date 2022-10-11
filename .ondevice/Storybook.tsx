import { getStorybookUI } from '@storybook/react-native';
import './storybook.requires';
import { theme } from '../src'
import {
  Roboto_400Regular as Roboto400Regular,
  Roboto_400Regular_Italic as Roboto400RegularItalic,
  Roboto_500Medium as Roboto500Medium,
  Roboto_700Bold as Roboto700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

const Storybook = () => {

    const [fontsLoaded]=useFonts({
        Roboto400Regular,
        Roboto400RegularItalic,
        Roboto500Medium,
        Roboto700Bold,
    });

    const StorybookUIRoot = getStorybookUI({
        theme: {
            backgroundColor: theme.colors.themeDark,
            storyListBackgroundColor: theme.colors.themeLight,
            listItemActiveColor: theme.colors.primary['500'],
            listItemActiveTextColor: theme.colors.secondary['500'],
            headerTextColor: theme.colors.neutral['500'],
            labelColor: theme.colors.neutral['100'],
            borderColor: theme.colors.secondary['100'],
            previewBorderColor: theme.colors.secondary['500'],
            buttonTextColor: theme.colors.white,
            buttonActiveTextColor: theme.colors.white,
            secondaryLabelColor: theme.colors.neutral['500'],
        },
        tabOpen: -1,
        onDeviceUI: true
    });

    if (!fontsLoaded) {
        return null
    }
    return StorybookUIRoot()
};

export default Storybook;