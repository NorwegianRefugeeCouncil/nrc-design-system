import React, { FC } from 'react';
import { Icon as IconNB } from 'native-base';

import { IconProps } from '../../types/icons';
import * as icons from '../../assets/icons';

export const Icon: FC<IconProps> = ({ name, customIconProps, ...props }) => {
  const MappedIcon = icons[name];
  return (
    <IconNB {...props}>
      {MappedIcon && <MappedIcon {...customIconProps} />}
    </IconNB>
  );
};
