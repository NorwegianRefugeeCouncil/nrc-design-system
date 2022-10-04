import { Button as ButtonNB, IButtonProps } from 'native-base';
import React from 'react';

import { ActivityIconNames, IconNames } from '../../types/icons';
import { Icon } from '../Icon/Icon';

type Props = {
  text: string;
  icon?: IconNames | ActivityIconNames | undefined;
} & Pick<IButtonProps, 'variant' | 'colorScheme'>;

export const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <ButtonNB
      {...props}
      accessibilityLabel={props.text}
      id={props.text}
      accessible
      startIcon={props.icon ? <Icon name={props.icon} /> : undefined}
    >
      {props.text}
    </ButtonNB>
  );
};
