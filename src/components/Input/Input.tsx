import { FormControl, IInputProps, Input as InputNB } from 'native-base';
import React from 'react';

type Props = {
  label: string;
  helperText: string;
} & Pick<
  IInputProps,
  'isFocused' | 'isDisabled' | 'value' | 'isInvalid' | 'type' | 'isReadOnly'
>;

export const Input: React.FC<Props> = ({
  label,
  helperText,
  isInvalid,
  ...props
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormControl.Label>{label}</FormControl.Label>
      <InputNB {...props} />
      <FormControl.HelperText>{helperText}</FormControl.HelperText>
    </FormControl>
  );
};
