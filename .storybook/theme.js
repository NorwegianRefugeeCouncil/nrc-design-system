import { create } from '@storybook/theming';
import { colorTokens } from '../src/tokens/colors';
import logo from '../static/nrc_logo.png';

export default create({
  base: 'light',
  brandTitle: 'NRC Design system',
  brandUrl: 'https://www.nrc.no/',
  brandImage: logo,

  colorPrimary: colorTokens.primary500,
  colorSecondary: colorTokens.secondary500,

  appBg: colorTokens.themeLight,
  appContentBg: colorTokens.white,
  appBorderColor: colorTokens.neutral200,
  appBorderRadius: 4,

  barTextColor: colorTokens.neutral400,
  barSelectedColor: colorTokens.primary500,
  barBg: colorTokens.white,

  inputBg: colorTokens.white,
  inputBorder: colorTokens.primary500,
  inputTextColor: colorTokens.neutral100,
  inputBorderRadius: 4,
});
