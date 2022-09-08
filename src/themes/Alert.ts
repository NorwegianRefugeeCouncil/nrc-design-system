import typography from '../tokens/typography';

export default {
  baseStyle: {
    height: 'max-content',
    borderWidth: '1px',
    borderRadius: '0px',
    px: 'nrc_4',
    width: '100%',
    _text: {
      fontSize: '20px',
      fontWeight: '500',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '10px',
  },
  variants: {
    info: () => ({
      backgroundColor: 'neutral.100',
      borderColor: 'neutral.500',
      _text: {
        color: 'neutral.500',
        height: typography.fontSizes.sm,
        lineHeight: typography.lineHeights.xs,
      },
    }),
    success: () => ({
      backgroundColor: 'tertiary4.100',
      borderColor: 'signalSuccess',
      _text: {
        color: 'signalSuccess',
        height: typography.fontSizes.sm,
        lineHeight: typography.lineHeights.xs,
      },
    }),
    error: () => ({
      backgroundColor: 'tertiary2.100',
      borderColor: 'signalDanger',
      _text: {
        color: 'signalDanger',
        height: typography.fontSizes.sm,
        lineHeight: typography.lineHeights.xs,
      },
    }),
  },
};
