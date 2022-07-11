var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import textTheme from './Text';
export default {
    baseStyle: {
        _text: __assign({}, textTheme.variants.heading({ level: '4' })),
        borderRadius: 'nrc_xs',
        height: 'nrc_10',
        paddingLeft: 'nrc_10',
        paddingRight: 'nrc_10',
    },
    variants: {
        major: function (_a) {
            var colorScheme = _a.colorScheme;
            return ({
                backgroundColor: "".concat(colorScheme, ".500"),
                _text: {
                    color: 'white',
                },
                _hover: {
                    backgroundColor: colorScheme === 'secondary' ? 'link' : "".concat(colorScheme, ".200"),
                    _text: {
                        color: colorScheme === 'secondary' ? 'white' : "".concat(colorScheme, ".500"),
                    },
                },
                _disabled: {
                    backgroundColor: 'neutral.300',
                    _text: {
                        color: 'neutral.200',
                    },
                },
                _pressed: {
                    backgroundColor: "".concat(colorScheme, ".300"),
                    _text: {
                        color: 'white',
                    },
                },
                _focus: {
                    backgroundColor: "".concat(colorScheme, ".300"),
                    _text: {
                        color: 'white',
                    },
                },
            });
        },
        minor: function (_a) {
            var colorScheme = _a.colorScheme;
            return ({
                backgroundColor: 'transparent',
                _text: {
                    color: "".concat(colorScheme, ".500"),
                },
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: "".concat(colorScheme, ".500"),
                _hover: {
                    backgroundColor: colorScheme === 'secondary'
                        ? "".concat(colorScheme, ".100")
                        : "".concat(colorScheme, ".200"),
                    borderColor: colorScheme === 'secondary' ? 'link' : "".concat(colorScheme, ".500"),
                    _text: {
                        color: colorScheme === 'secondary' ? 'link' : "".concat(colorScheme, ".500"),
                    },
                },
                _disabled: {
                    backgroundColor: 'neutral.200',
                    borderColor: 'neutral.300',
                    _text: {
                        color: 'neutral.300',
                    },
                },
                _pressed: {
                    backgroundColor: "".concat(colorScheme, ".300"),
                    borderWidth: 0,
                    _text: {
                        color: 'white',
                    },
                },
                _focus: {
                    backgroundColor: "".concat(colorScheme, ".300"),
                    borderWidth: 0,
                    _text: {
                        color: 'white',
                    },
                },
            });
        },
    },
};
