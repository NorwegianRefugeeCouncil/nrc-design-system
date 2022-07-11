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
var colors_1 = __importDefault(require("./colors"));
var spacing_1 = __importDefault(require("./spacing"));
var typography_1 = __importDefault(require("./typography"));
var radii_1 = __importDefault(require("./radii"));
exports.default = __assign(__assign({ colors: colors_1.default, spacing: spacing_1.default }, typography_1.default), { radii: radii_1.default });
