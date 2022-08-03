import React from 'react';
import { Path, Svg } from 'react-native-svg';

export function SortAsc() {
  return (
    <Svg viewBox="0 0 24 24">
      <Path fill="none" d="M0 0H24V24H0z" />
      <Path d="M19 3l4 5h-3v12h-2V8h-3l4-5zm-5 15v2H3v-2h11zm0-7v2H3v-2h11zm-2-7v2H3V4h9z" />
    </Svg>
  );
}
