"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_base_1 = require("native-base");
var tokens_1 = __importDefault(require("../tokens"));
var Button_1 = __importDefault(require("./Button"));
var Icon_1 = __importDefault(require("./Icon"));
var Input_1 = __importDefault(require("./Input"));
var Text_1 = __importDefault(require("./Text"));
var FormControlErrorMessage_1 = __importDefault(require("./FormControlErrorMessage"));
var FormControlHelperText_1 = __importDefault(require("./FormControlHelperText"));
var FormControlLabel_1 = __importDefault(require("./FormControlLabel"));
var Checkbox_1 = __importDefault(require("./Checkbox"));
var Link_1 = __importDefault(require("./Link"));
exports.default = (0, native_base_1.extendTheme)({
    colors: tokens_1.default.colors,
    fontConfig: tokens_1.default.fontConfig,
    fontSizes: tokens_1.default.fontSizes,
    fontWeights: tokens_1.default.fontWeights,
    fonts: tokens_1.default.fonts,
    lineHeights: tokens_1.default.lineHeights,
    letterSpacings: tokens_1.default.letterSpacings,
    components: {
        Button: Button_1.default,
        Checkbox: Checkbox_1.default,
        FormControlErrorMessage: FormControlErrorMessage_1.default,
        FormControlHelperText: FormControlHelperText_1.default,
        FormControlLabel: FormControlLabel_1.default,
        Icon: Icon_1.default,
        Input: Input_1.default,
        Link: Link_1.default,
        Text: Text_1.default,
    },
    space: {
        nrc_1: tokens_1.default.spacing.spacing5,
        nrc_2: tokens_1.default.spacing.spacing10,
        nrc_3: tokens_1.default.spacing.spacing15,
        nrc_4: tokens_1.default.spacing.spacing20,
        nrc_5: tokens_1.default.spacing.spacing25,
        nrc_6: tokens_1.default.spacing.spacing30,
        nrc_7: tokens_1.default.spacing.spacing35,
        nrc_8: tokens_1.default.spacing.spacing40,
        nrc_9: tokens_1.default.spacing.spacing45,
        nrc_10: tokens_1.default.spacing.spacing50,
    },
    sizes: {
        nrc_1: tokens_1.default.spacing.spacing5,
        nrc_2: tokens_1.default.spacing.spacing10,
        nrc_3: tokens_1.default.spacing.spacing15,
        nrc_4: tokens_1.default.spacing.spacing20,
        nrc_5: tokens_1.default.spacing.spacing25,
        nrc_6: tokens_1.default.spacing.spacing30,
        nrc_7: tokens_1.default.spacing.spacing35,
        nrc_8: tokens_1.default.spacing.spacing40,
        nrc_9: tokens_1.default.spacing.spacing45,
        nrc_10: tokens_1.default.spacing.spacing50,
    },
    radii: tokens_1.default.radii,
});
