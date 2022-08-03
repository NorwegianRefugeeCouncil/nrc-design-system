import React from 'react';
import { Path, Svg } from 'react-native-svg';

export function SortDesc() {
  return (
    <Svg viewBox="0 0 24 24">
      <Path fill="none" d="M0 0H24V24H0z" />
      <Path d="M20 4v12h3l-4 5-4-5h3V4h2zm-8 14v2H3v-2h9zm2-7v2H3v-2h11zm0-7v2H3V4h11z" />
    </Svg>
  );
}
