import { colorTokens } from '../tokens/colors';
import typography from '../tokens/typography';

export default {
  baseStyle: {
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
  },
  variants: {
    info: {
      backgroundColor: colorTokens.neutral100,
      borderColor: colorTokens.neutral500,
      _text: {
        height: typography.fontSizes.sm,
        lineHeight: typography.lineHeights.xs,
      },
      textProps: {
        color: colorTokens.neutral500,
      },
      svgProps: {
        color: colorTokens.neutral500,
      },
    },
    success: {
      backgroundColor: colorTokens.tertiaryFourth100,
      borderColor: colorTokens.signalSuccess,
      _text: {
        height: typography.fontSizes.sm,
        lineHeight: typography.lineHeights.xs,
      },
      textProps: {
        color: colorTokens.signalSuccess,
      },
      svgProps: {
        color: colorTokens.signalSuccess,
      },
    },
    error: {
      backgroundColor: colorTokens.tertiarySecond100,
      borderColor: colorTokens.signalDanger,
      _text: {
        height: typography.fontSizes.sm,
        lineHeight: typography.lineHeights.xs,
      },
      textProps: {
        color: colorTokens.signalDanger,
      },
      svgProps: {
        color: colorTokens.signalDanger,
      },
    },
  },
};
