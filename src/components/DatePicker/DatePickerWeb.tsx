import React from 'react';

import tokens from '../../tokens';

type Props = {
  date: Date;
  onChange: (date: any) => void;
};

export const DatePickerWeb: React.FC<Props> = ({ date, onChange }) => {
  return (
    <input
      type="date"
      value={date.toString()}
      onChange={(e) => onChange(e.target.value)}
      style={{
        color: tokens.colors.neutral['500'],
        border: 1,
        borderColor: tokens.colors.neutral['300'],
        borderStyle: 'solid',
        borderRadius: 3,
        height: 50,
        fontSize: 16,
        lineHeight: 50,
        paddingRight: 10,
        paddingLeft: 10,
      }}
    />
  );
};
