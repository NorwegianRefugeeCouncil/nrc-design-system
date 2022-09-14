import typography from '../tokens/typography';

export default {
  baseStyle: {
    height: 'max-content',
    minHeight: 10,
    borderWidth: '1px',
    borderRadius: '0px',
    px: '18px',
    py: '13px',
    width: '100%',
    _text: {
      fontSize: typography.fontSizes.sm,
      fontWeight: 'medium',
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
        height: typography.fontSizes.sm,
        lineHeight: typography.lineHeights.xs,
      },
      textProps: {
        color: 'neutral.500',
      },
      svgProps: {
        color: 'neutral.500',
      },
    }),
    success: () => ({
      backgroundColor: 'tertiary4.100',
      borderColor: 'signalSuccess',
      _text: {
        height: typography.fontSizes.sm,
        lineHeight: typography.lineHeights.xs,
      },
      textProps: {
        color: 'signalSuccess',
      },
      svgProps: {
        color: 'signalSuccess',
      },
    }),
    error: () => ({
      backgroundColor: 'tertiary2.100',
      borderColor: 'signalDanger',
      _text: {
        height: typography.fontSizes.sm,
        lineHeight: typography.lineHeights.xs,
      },
      textProps: {
        color: 'signalDanger',
      },
      svgProps: {
        color: 'signalDanger',
      },
    }),
  },
};
