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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Text_1 = __importDefault(require("./Text"));
var disabledStyle = {
    borderColor: 'neutral.200',
    backgroundColor: 'neutral.100',
    color: 'neutral.200',
};
var activeStyle = {
    borderColor: 'primary.500',
    backgroundColor: 'secondary.100',
    color: 'neutral.500',
};
exports.default = {
    baseStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'neutral.300',
        borderRadius: 'nrc_xs',
        color: 'neutral.300',
        padding: 3,
        _android: __assign({}, Text_1.default.variants.body({ level: '1' })),
        _ios: __assign({}, Text_1.default.variants.body({ level: '1' })),
        _web: __assign({}, Text_1.default.variants.body({ level: '1' })),
        _invalid: {
            borderColor: 'signalDanger',
            backgroundColor: 'tertiary2.100',
            color: 'signalDanger',
        },
        _focus: activeStyle,
        _hover: activeStyle,
        _disabled: disabledStyle,
        _readOnly: disabledStyle,
    },
};
