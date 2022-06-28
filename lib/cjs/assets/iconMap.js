"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconMap = void 0;
var icons = __importStar(require("./icons"));
exports.iconMap = {
    activityCamp: icons.ActivityCamp,
    activityEducation: icons.ActivityEducation,
    activityFood: icons.ActivityFood,
    activityIcla: icons.ActivityIcla,
    activityShelter: icons.ActivityShelter,
    activityWash: icons.ActivityWash,
    attachment: icons.Attachment,
    arrowDown: icons.ArrowDown,
    arrowLeft: icons.ArrowLeft,
    arrowRight: icons.ArrowRight,
    arrowUp: icons.ArrowUp,
    beneficiary: icons.Beneficiary,
    calendar: icons.Calendar,
    case: icons.Case,
    circleError: icons.CircleError,
    circleSuccess: icons.CircleSuccess,
    circleQuestion: icons.CircleQuestion,
    delete: icons.Delete,
    edit: icons.Edit,
    email: icons.Email,
    faceError: icons.FaceError,
    faceGeneral: icons.FaceGeneral,
    faceSuccess: icons.FaceSuccess,
    filter: icons.Filter,
    home: icons.Home,
    menu: icons.Menu,
    minus: icons.Minus,
    more: icons.More,
    next: icons.Next,
    notification: icons.Notification,
    plus: icons.Plus,
    protection: icons.Protection,
    registration: icons.Registration,
    reload: icons.Reload,
    save: icons.Save,
    search: icons.Search,
    setting: icons.Setting,
    sync: icons.Sync,
    thumbnail: icons.Thumbnail,
    upload: icons.Upload,
};
