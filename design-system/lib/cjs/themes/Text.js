"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var makeTextVariant = function (levelStyles, styles) {
    return function (props) {
        var level = (props.level || 1).toString();
        return __assign(__assign({}, levelStyles[level]), styles);
    };
};
var textTheme = {
    defaultProps: {
        level: '1',
        variant: 'body',
    },
    baseStyle: {
        textAlign: 'auto',
        color: 'neutral.500',
        fontFamily: 'body',
        fontStyle: 'normal',
    },
    variants: {
        display: makeTextVariant({
            '1': { fontSize: '3xl', lineHeight: '3xl' },
            '2': { fontSize: '2xl', lineHeight: '2xl' },
        }, { fontWeight: 'bold' }),
        heading: makeTextVariant({
            '1': { fontSize: 'xl', lineHeight: 'xl' },
            '2': { fontSize: 'lg', lineHeight: 'lg' },
            '3': { fontSize: 'md', lineHeight: 'md' },
            '4': { fontSize: 'sm', lineHeight: 'xs' },
            '5': { fontSize: '3xs', lineHeight: '4xs' },
        }, { fontWeight: 'medium' }),
        body: makeTextVariant({
            '1': { fontSize: 'xs', lineHeight: 'sm' },
            '2': { fontSize: '2xs', lineHeight: '2xs' },
        }, { fontWeight: 'regular' }),
        caption: makeTextVariant({
            '1': { fontSize: '3xs', lineHeight: '3xs' },
        }, { fontWeight: 'regular' }),
        inline: makeTextVariant({
            '1': { fontSize: 'xs', lineHeight: 'sm' },
        }, {
            fontWeight: 'medium',
            textDecorationLine: 'underline',
        }),
        label: makeTextVariant({
            '1': { fontSize: 'xs', lineHeight: 'sm' },
        }, { fontWeight: 'medium' }),
    },
};
exports.default = textTheme;
