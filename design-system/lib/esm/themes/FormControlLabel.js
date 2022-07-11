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
    defaultProps: {
        size: 'sm',
    },
    baseStyle: function () {
        return {
            mb: '0.5',
            _text: __assign(__assign({}, textTheme.variants.label({ level: '1' })), { color: 'neutral.300' }),
            _invalid: {
                _text: {
                    color: 'signalDanger',
                },
            },
        };
    },
    sizes: {
        xs: {
            _text: __assign({}, textTheme.variants.body({ level: '2' })),
        },
        sm: {
            _text: __assign({}, textTheme.variants.label({ level: '1' })),
        },
    },
};
