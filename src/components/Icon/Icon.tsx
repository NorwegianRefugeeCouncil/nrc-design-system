import React from 'react';
import { Icon as IconNB } from 'native-base';

import { IconProps } from '../../types/icons';
import * as icons from '../../assets/icons';

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const MappedIcon = icons[name];

  return <IconNB {...props}>{MappedIcon && <MappedIcon />}</IconNB>;
};
