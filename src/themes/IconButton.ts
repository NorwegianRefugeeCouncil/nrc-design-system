export default {
  baseStyle: {
    borderRadius: 'full',
    height: '50px',
    width: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    major: ({ colorScheme, ...args }: any) => {
      return {
        ...args.theme.components.IconButton.variants.solid({
          colorScheme,
          ...args,
        }),
        backgroundColor: `${colorScheme}.500`,
        _icon: {
          color: 'white',
        },
        _hover: {
          backgroundColor:
            colorScheme === 'secondary' ? 'link' : `${colorScheme}.200`,

          _icon: {
            color: colorScheme === 'secondary' ? 'white' : `${colorScheme}.500`,
          },
        },
        _disabled: {
          backgroundColor: 'neutral.300',

          _icon: {
            color: 'neutral.200',
          },
        },
        _pressed: {
          backgroundColor: `${colorScheme}.300`,

          _icon: {
            color: 'white',
          },
        },
        _focus: {
          backgroundColor: `${colorScheme}.300`,

          _icon: {
            color: 'white',
          },
        },
      };
    },
    minor: ({ colorScheme, ...args }: any) => ({
      ...args.theme.components.IconButton.variants.solid({
        colorScheme,
        ...args,
      }),
      bg: 'white',
      _icon: {
        color: `${colorScheme}.500`,
      },
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: `${colorScheme}.500`,
      _hover: {
        bg:
          colorScheme === 'secondary'
            ? `${colorScheme}.100`
            : `${colorScheme}.200`,
        borderColor:
          colorScheme === 'secondary' ? 'link' : `${colorScheme}.500`,
        _icon: {
          color: colorScheme === 'secondary' ? 'link' : `${colorScheme}.500`,
        },
      },
      _disabled: {
        bg: 'neutral.200',
        borderColor: 'neutral.300',
        _icon: {
          color: 'neutral.300',
        },
      },
      _pressed: {
        bg: `${colorScheme}.300`,
        borderWidth: 0,
        _icon: {
          color: 'white',
        },
      },
      _focus: {
        bg: `${colorScheme}.300`,
        borderWidth: 0,
        _icon: {
          color: 'white',
        },
      },
    }),
  },
};
