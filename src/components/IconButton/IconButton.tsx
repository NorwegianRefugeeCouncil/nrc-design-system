import { IconButton as IconButtonNB, IIconButtonProps } from 'native-base';
import React from 'react';

import { ActivityIconNames, IconNames } from '../../types/icons';
import { Icon } from '../Icon/Icon';

type Props = {
  altText: string;
  icon: IconNames | ActivityIconNames;
  onClick: () => void;
} & Pick<IIconButtonProps, 'variant' | 'colorScheme'>;

export const IconButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <IconButtonNB
      {...props}
      accessibilityLabel={props.altText}
      icon={<Icon name={props.icon} />}
      onPress={props.onClick}
    />
  );
};
