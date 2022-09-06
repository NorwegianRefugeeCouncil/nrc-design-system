/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

// temporary fix for https://github.com/storybookjs/react-native/issues/327 whilst the issue is investigated
try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require("../stories/Alert.stories.tsx"),
    require("../stories/Button.stories.tsx"),
    require("../stories/Colors.stories.mdx"),
    require("../stories/DateTimePicker.stories.tsx"),
    require("../stories/Fonts.stories.mdx"),
    require("../stories/Icon.stories.mdx"),
    require("../stories/Input.stories.tsx"),
    require("../stories/Intro.stories.mdx"),
    require("../stories/Logos.stories.mdx"),
    require("../stories/TextArea.stories.tsx"),
    require("../stories/Typo.stories.mdx"),
  ];
};

configure(getStories, module, false);
