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
exports.default = {
    baseStyle: function () {
        return {
            mt: '0.5',
            _text: __assign(__assign({}, Text_1.default.variants.caption({ level: '1' })), { color: 'neutral.300' }),
        };
    },
};
