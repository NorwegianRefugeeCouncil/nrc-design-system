# Using the library
The [design system](https://norwegianrefugeecouncil.github.io/nrc-design-system/) was built to guide Norwegian Refugee Council's (NRC) digital products, applications and websites. It's based on our brand book and design guidelines found on the identity portal. You can find all the elements you need to create beautiful, consistent, practical, accessible and enjoyable digital products in our design system.

## Requirements
This library only works for the following specific React versions:
```
react: 17.0.1
react-dom: 17.0.1
react-native: 0.64.3
```
So you need to ensure your project uses exactly the same.

## Installation
```
yarn add @nrcno/nrc-design-system
```
or
```
npm install @nrcno/nrc-design-system
```

## Usage
All components need to be wrapped in a `NativeBaseProvider` container, that you'd likely have at the root of your project

```
import { NativeBaseProvider } from '@nrcno/nrc-design-system';

ReactDOM.render(
  <React.StrictMode>
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>, container
);
```

Then the components can be used within the `App` defined above:

```
import { Input } from '@nrcno/nrc-design-system';

function App() {
  return (
    <Input
        helperText="This is a helpful explanation"
        label="Label"
        type="text"
        value="Input Text"
    />
  );
}
```
You can find the guidelines with visuals, examples and code snippets [here](https://norwegianrefugeecouncil.github.io/nrc-design-system/).

# Contributing

## getting started

You need to have `expo-cli` installed globally
```
yarn global add expo-cli
```

To get all the dependencies run

```
yarn install
```

To run on the web use

```
yarn start:web
```

To run on ios or android

```
yarn start:native
```

Then open the app from the terminal or from the expo ui in ios or android.

## Compiling and publishing the project

To compile the code and generate the distributable files execute:
```
./build.sh
```

Then you can publish it by running:
```
yarn publish
```

## important for ondevice

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```
yarn update-stories
```

To watch the stories files

```
yarn storybook-watcher
```

Note that this is only necessary for when you add or remove a story file.
