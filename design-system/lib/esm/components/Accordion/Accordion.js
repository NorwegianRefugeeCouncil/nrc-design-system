import React from 'react';
import { Text, Box, Pressable } from 'native-base';
export var Accordion = function (_a) {
    var header = _a.header, children = _a.children, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b;
    var _c = React.useState(defaultOpen), isExpanded = _c[0], setIsExpanded = _c[1];
    var handleOnPress = function () { return setIsExpanded(!isExpanded); };
    return (React.createElement(Box, null,
        React.createElement(Pressable, { bg: "secondary.500", p: "2", onPress: handleOnPress },
            React.createElement(Text, { color: "white", fontSize: "18px", lineHeight: "21px" }, header)),
        isExpanded && (React.createElement(Box, { bg: "secondary.100", p: "2" }, children))));
};
