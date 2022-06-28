"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleSuccess = void 0;
var react_1 = __importDefault(require("react"));
var react_native_svg_1 = require("react-native-svg");
var CircleSuccess = function (props) { return (react_1.default.createElement(react_native_svg_1.Svg, null,
    react_1.default.createElement(react_native_svg_1.Circle, { cx: "10", cy: "10", r: "10" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M6.83407 9.00114C6.74673 8.87775 6.60698 8.8025 6.45559 8.8025H4.84851C4.65927 8.8025 4.54864 9.02522 4.65927 9.18473L8.33925 14.4216C8.38276 14.4832 8.43972 14.5333 8.50548 14.5678C8.57125 14.6023 8.64397 14.6203 8.71773 14.6203C8.79149 14.6203 8.86421 14.6023 8.92997 14.5678C8.99574 14.5333 9.05269 14.4832 9.09621 14.4216L15.2858 5.61221C15.3964 5.4527 15.2858 5.22998 15.0965 5.22998H13.4895C13.341 5.22998 13.1983 5.30522 13.111 5.42862L8.71773 11.6828L6.83407 9.00114Z", fill: props && props.innerColor || 'white' }))); };
exports.CircleSuccess = CircleSuccess;