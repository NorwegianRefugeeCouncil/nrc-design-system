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
        backgroundColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'neutral.300',
        borderRadius: 'nrc_xs',
        color: 'neutral.500',
        padding: 0,
        _text: {
            _android: __assign({}, textTheme.variants.body({ level: '2' })),
            _ios: __assign({}, textTheme.variants.body({ level: '2' })),
            _web: __assign({}, textTheme.variants.body({ level: '2' })),
            ml: 'nrc_2',
        },
        _checked: {
            borderColor: 'primary.500',
            borderRadius: 'nrc_xs',
            backgroundColor: 'primary.500',
            _icon: {
                backgroundColor: 'primary.500',
                name: 'check',
                color: 'white',
                viewBox: '-2 -2 18 18',
            },
        },
        _disabled: {
            opacity: 1,
            backgroundColor: 'white',
            borderColor: 'neutral.200',
            color: 'neutral.200',
        },
        _interactionBox: {
            backgroundColor: 'transparent',
            maxHeight: '100%',
        },
    },
};
