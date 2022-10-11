import { Button as ButtonNB, IButtonProps } from 'native-base';
import React from 'react';

import { ActivityIconNames, IconNames } from '../../types/icons';
import { Icon } from '../Icon/Icon';

type Props = {
  text: string;
  icon?: IconNames | ActivityIconNames | undefined;
  onClick: () => void;
} & Pick<IButtonProps, 'variant' | 'colorScheme'>;

const ButtonA: React.FC<Props> = ({ ...props }) => {
  return (
    <ButtonNB
      {...props}
      accessibilityLabel={props.text}
      accessible
      startIcon={props.icon ? <Icon name={props.icon} /> : undefined}
      onPress={props.onClick}
    >
      {props.text}
    </ButtonNB>
  );
};
export default ButtonA;
