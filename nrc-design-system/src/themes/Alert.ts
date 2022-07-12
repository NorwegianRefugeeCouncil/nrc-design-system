export default {
  baseStyle: {
    height: "nrc_10",
    borderWidth: "1px",
    borderRadius: "0px",
    alignItems: "flex-start",
    minWidth: "520px",
    px: "nrc_4",
    _text: {
      fontSize: "20px",
      fontWeight: "500",
    },
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
