import { ActivityIconNames, IconNames, Logos } from '../types/icons';

import colors from './colors';
import spacing from './spaces';
import typography from './typography';
import radii from './radii';

export default {
  colors,
  spacing,
  ...typography,
  radii,
  iconNames: {
    ...ActivityIconNames,
    ...IconNames,
  },
  logos: {
    ...Logos,
  },
};
