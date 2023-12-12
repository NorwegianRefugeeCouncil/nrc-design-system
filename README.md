![image](https://user-images.githubusercontent.com/3481514/145904252-92e3dc1e-591f-410f-88a1-b4250f4ba6f2.png)


# getting started

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

# Compiling and publishing the project

To compile the code and generate the distributable files execute:
```
./build.sh
```

Then you can publish it by running:
```
yarn publish
```

# important for ondevice

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
