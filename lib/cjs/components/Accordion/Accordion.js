"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var react_1 = __importDefault(require("react"));
var native_base_1 = require("native-base");
var Accordion = function (_a) {
    var header = _a.header, children = _a.children, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b;
    var _c = react_1.default.useState(defaultOpen), isExpanded = _c[0], setIsExpanded = _c[1];
    var handleOnPress = function () { return setIsExpanded(!isExpanded); };
    return (react_1.default.createElement(native_base_1.Box, null,
        react_1.default.createElement(native_base_1.Pressable, { bg: "secondary.500", p: "2", onPress: handleOnPress },
            react_1.default.createElement(native_base_1.Text, { color: "white", fontSize: "18px", lineHeight: "21px" }, header)),
        isExpanded && (react_1.default.createElement(native_base_1.Box, { bg: "secondary.100", p: "2" }, children))));
};
exports.Accordion = Accordion;
