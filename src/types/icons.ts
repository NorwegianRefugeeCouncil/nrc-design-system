import { IIconProps } from 'native-base';
import { Color } from 'react-native-svg';

import { SortAsc } from '../assets/icons/SortAsc';
import { FileText } from '../assets/icons/FileText';

export enum IconNames {
  ActivityCamp = 'ActivityCamp',
  ActivityEducation = 'ActivityEducation',
  ActivityFood = 'ActivityFood',
  ActivityIcla = 'ActivityIcla',
  ActivityShelter = 'ActivityShelter',
  ActivityWash = 'ActivityWash',
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  Calendar = 'Calendar',
  Close = 'Close',
  FileText = 'FileText',
  Home = 'Home',
  Mail = 'Mail',
  Search = 'Search',
  SortAsc = 'SortAsc',
  SortDesc = 'SortDesc',
  Upload = 'Upload',
}

export type IconProps = {
  name: IconNames;
  customIconProps?: {
    innerColor?: Color;
  };
} & Omit<IIconProps, 'name'>;
