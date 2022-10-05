import {
  FormControl,
  ITextAreaProps,
  TextArea as TextAreaNB,
} from 'native-base';
import React from 'react';

type Props = {
  label: string;
} & Pick<
  ITextAreaProps,
  'isFocused' | 'isDisabled' | 'value' | 'isInvalid' | 'type' | 'isReadOnly'
>;

export const TextArea: React.FC<Props> = ({ label, isInvalid, ...props }) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormControl.Label>{label}</FormControl.Label>
      <TextAreaNB {...props} />
    </FormControl>
  );
};
