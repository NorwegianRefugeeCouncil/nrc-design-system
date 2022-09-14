import React, { FC } from 'react';
import { Text, Alert, Pressable, IAlertProps, Box } from 'native-base';

import { IconNames } from '../../types/icons';
import { Icon } from '../Icon/Icon';
import theme from '../../themes/Alert';

type Props = {
  isClosable: boolean;
  text: string;
} & Partial<IAlertProps>;

export const Notification: FC<Props> = ({
  isClosable = false,
  text,
  variant,
  ...props
}) => {
  const [show, setShow] = React.useState(true);

  const handleOnPress = () => setShow(false);

  let extraProps = theme.variants.info();

  switch (variant) {
    case 'error':
      extraProps = theme.variants.error();
      break;
    case 'success':
      extraProps = theme.variants.success();
      break;
    default:
      break;
  }

  const { textProps, svgProps } = extraProps;

  if (!show) {
    return <Box />;
  }

  return (
    <Alert {...props} variant={variant}>
      <Text fontSize="20px" lineHeight="24px" {...textProps}>
        {text}
      </Text>
      {isClosable && (
        <Pressable onPress={handleOnPress}>
          <Icon name={IconNames.Close} {...svgProps} />
        </Pressable>
      )}
    </Alert>
  );
};
