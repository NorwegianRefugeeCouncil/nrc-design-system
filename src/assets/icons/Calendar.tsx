import React from 'react';
import { Path, Svg } from 'react-native-svg';

export function Calendar() {
  return (
    <Svg viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z" />
    </Svg>
  );
}
