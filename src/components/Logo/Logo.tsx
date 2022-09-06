import React from 'react';

import { LogoProps } from '../../types/icons';
import * as logos from '../../assets/logos';

export const Logo: React.FC<LogoProps> = ({ name, ...props }) => {
  const MappedLogo = logos[name];

  return <MappedLogo {...props} />;
};
