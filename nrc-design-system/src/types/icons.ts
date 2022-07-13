import { IIconProps } from 'native-base';
import { Color } from 'react-native-svg';

export enum IconNames {
  ActivityCamp = 'ActivityCamp',
  ActivityEducation = 'ActivityEducation',
  ActivityFood = 'ActivityFood',
  ActivityIcla = 'ActivityIcla',
  ActivityShelter = 'ActivityShelter',
  ActivityWash = 'ActivityWash',
  Attachment = 'Attachment',
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  Beneficiary = 'Beneficiary',
  Calendar = 'Calendar',
  Case = 'Case',
  CircleError = 'CircleError',
  CircleSuccess = 'CircleSuccess',
  CircleQuestion = 'CircleQuestion',
  Delete = 'Delete',
  Edit = 'Edit',
  Email = 'Email',
  FaceError = 'FaceError',
  FaceGeneral = 'FaceGeneral',
  FaceSuccess = 'FaceSuccess',
  Filter = 'Filter',
  Home = 'Home',
  Menu = 'Menu',
  Minus = 'Minus',
  More = 'More',
  Next = 'Next',
  Notification = 'Notification',
  Plus = 'Plus',
  Protection = 'Protection',
  Registration = 'Registration',
  Reload = 'Reload',
  Save = 'Save',
  Search = 'Search',
  Setting = 'Setting',
  Sync = 'Sync',
  Thumbnail = 'Thumbnail',
  Upload = 'Upload',
}

export type IconProps = {
  name: IconNames;
  customIconProps?: {
    innerColor?: Color;
  };
} & Omit<IIconProps, 'name'>;
