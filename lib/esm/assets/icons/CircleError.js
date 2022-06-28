import React from 'react';
import { Path, Circle, Svg } from 'react-native-svg';
export var CircleError = function (props) { return (React.createElement(Svg, null,
    React.createElement(Circle, { cx: "10", cy: "10", r: "10" }),
    React.createElement(Path, { d: "M10.9463 11.9497H9.14344L8.88803 4.37012H11.2017L10.9463 11.9497ZM10.0449 13.1366C10.4105 13.1366 10.7034 13.2443 10.9238 13.4597C11.1492 13.675 11.2618 13.9504 11.2618 14.286C11.2618 14.6165 11.1492 14.8894 10.9238 15.1048C10.7034 15.3201 10.4105 15.4278 10.0449 15.4278C9.68431 15.4278 9.39134 15.3201 9.16598 15.1048C8.94563 14.8894 8.83545 14.6165 8.83545 14.286C8.83545 13.9555 8.94563 13.6825 9.16598 13.4672C9.39134 13.2468 9.68431 13.1366 10.0449 13.1366Z", fill: props && props.innerColor || 'white' }))); };