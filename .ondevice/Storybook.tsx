import { getStorybookUI } from '@storybook/react-native';
import './storybook.requires';
import { theme } from '../src'
 
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

export default StorybookUIRoot;
