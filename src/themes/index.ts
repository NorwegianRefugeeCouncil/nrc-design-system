import { extendTheme } from 'native-base';

import tokens from '../tokens';
import spaces from '../tokens/spaces';

import Alert from './Alert';
import Button from './Button';
import Checkbox from './Checkbox';
import FormControlErrorMessage from './FormControlErrorMessage';
import FormControlHelperText from './FormControlHelperText';
import FormControlLabel from './FormControlLabel';
import Icon from './Icon';
import IconButton from './IconButton';
import Input from './Input';
import Link from './Link';
import Text from './Text';

export default extendTheme({
  colors: tokens.colors,
  fontConfig: tokens.fontConfig,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  fonts: tokens.fonts,
  lineHeights: tokens.lineHeights,
  letterSpacings: tokens.letterSpacings,
  components: {
    Alert,
    Button,
    Checkbox,
    FormControlErrorMessage,
    FormControlHelperText,
    FormControlLabel,
    Icon,
    IconButton,
    Input,
    Link,
    Logo: {},
    Text,
  },
  space: spaces,
  sizes: spaces,
  radii: tokens.radii,
});
