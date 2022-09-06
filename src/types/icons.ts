import { IIconProps } from 'native-base';
import { SvgProps } from 'react-native-svg';

export enum ActivityIconNames {
  ActivityCamp = 'ActivityCamp',
  ActivityEducation = 'ActivityEducation',
  ActivityFood = 'ActivityFood',
  ActivityIcla = 'ActivityIcla',
  ActivityShelter = 'ActivityShelter',
  ActivityWash = 'ActivityWash',
}

export enum IconNames {
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
  name: IconNames | ActivityIconNames;
} & Omit<IIconProps, 'name'>;

export enum Logos {
  Horizontal = 'Horizontal',
  Main = 'Main',
  Mark = 'Mark',
}

export type LogoProps = {
  name: Logos;
} & SvgProps;
