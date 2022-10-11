import { Platform } from 'react-native';

export default {
  baseStyle: {
    fill: 'currentColor',
    flex: `${Platform.OS === 'web' ? 'none' : 1}`,
  },
  defaultProps: {
    size: '24px',
  },
};
