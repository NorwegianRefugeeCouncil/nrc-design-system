import textTheme from './Text';

export default {
  defaultProps: {
    size: 'sm',
  },
  baseStyle: {
    mb: '0.5',
    _text: {
      ...textTheme.variants.label({ level: '1' }),
      color: 'neutral.400',
    },
    _invalid: {
      _text: {
        color: 'signalDanger',
      },
    },
  },
  sizes: {
    xs: {
      _text: {
        ...textTheme.variants.body({ level: '2' }),
      },
    },
    sm: {
      _text: {
        ...textTheme.variants.label({ level: '1' }),
      },
    },
  },
};
