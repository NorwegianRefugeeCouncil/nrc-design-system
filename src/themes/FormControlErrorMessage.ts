import textTheme from './Text';

export default {
  baseStyle: {
    mt: '0.5',
    _text: {
      ...textTheme.variants.caption({ level: '1' }),
    },
    _invalid: {
      _text: {
        color: 'signalDanger',
      },
    },
  },
};
