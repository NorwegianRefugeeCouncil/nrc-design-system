import React, { FC, ReactNode } from 'react';
import { Text, Box, Pressable } from 'native-base';

import { IconNames } from '../../types/icons';
import { colorTokens } from '../../tokens/colors';
import { Icon } from '../Icon/Icon';

type Props = {
  header: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export const Accordion: FC<Props> = ({
  header,
  children,
  defaultOpen = false,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultOpen);

  const handleOnPress = () => setIsExpanded(!isExpanded);

  return (
    <Box mb="4">
      <Pressable
        bg="secondary.500"
        p="2"
        onPress={handleOnPress}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height="10"
        _hover={{
          bg: 'secondary.300',
        }}
      >
        <Text color="white" fontSize="18px" lineHeight="21px" fontWeight="700">
          {header}
        </Text>
        <Icon
          name={isExpanded ? IconNames.ArrowDown : IconNames.ArrowLeft}
          size="24px"
          color={colorTokens.white}
        />
      </Pressable>
      {isExpanded && (
        <Box bg="neutral.100" p="2">
          {children}
        </Box>
      )}
    </Box>
  );
};
