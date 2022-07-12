export default {
  defaultProps: {
    variant: "subtle",
  },
  baseStyle: () => {
    return {
      height: "nrc_10",
      borderWidth: 1,
      justifyContent: "center",
      minWidth: "520px",
      px: "nrc_4",
      _text: {
        fontSize: "20px",
        fontWeight: "500",
      },
    };
  },
  variants: {
    info: () => ({
      backgroundColor: "neutral.100",
      borderColor: "neutral.500",
      _text: {
        color: "neutral.500",
      },
    }),
    success: () => ({
      backgroundColor: "tertiary4.100",
      borderColor: "signalSuccess",
      _text: {
        color: "signalSuccess",
      },
    }),
    error: () => ({
      backgroundColor: "tertiary2.100",
      borderColor: "signalDanger",
      _text: {
        color: "signalDanger",
      },
    }),
  },
};
