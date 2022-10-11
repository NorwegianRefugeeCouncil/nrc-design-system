import React from 'react';
import { Icon as IconNB } from 'native-base';

import { IconProps } from '../../types/icons';
import * as icons from '../../assets/icons';
import tokens from '../../tokens';

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const MappedIcon = icons[name];

  return (
    <IconNB viewBox="0 0 24 24" {...props} accessibilityLabel={MappedIcon.name}>
      {MappedIcon && <MappedIcon />}
    </IconNB>
  );
};
