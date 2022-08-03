import React from 'react';
import { Path, Svg } from 'react-native-svg';

export function Close() {
  return (
    <Svg viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
    </Svg>
  );
}
