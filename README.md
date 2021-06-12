# Expo React Native Template

This template is built to start a barebones React Native project using Expo.
The current Expo version is [Expo SDK 41](https://blog.expo.io/expo-sdk-41-12cc5232f2ef).

## Expo Project Setup
Install the latest version of the [Expo CLI](https://docs.expo.io/versions/latest/get-started/installation/).

### Terminal Setup
```javascript
// Install the dependencies
yarn install

// Run project with Expo
expo start

// Run project with Expo and clear cache
expo start -c
```

## React Native CLI Setup
While our template works primarily with Expo, we understand that not every project will be able to use Expo. The following steps help in unbaking Expo from this template

### Install React Native CLI
Currently supports Android emulation without Expo.

Follow the installation guide from [React Native CLI](https://reactnative.dev/docs/environment-setup).
Essentially the android/ios folders will need to be created and hooked up appropriately as with any bare setup.

```javascript
// Replace expo dependency with standard dependency
yarn add react-native

// Install the rest of the dependencies
yarn install

// Run a modified version of the android only emulation script
yarn run android:vanilla
```

The index.js file within the root of the project is the entry point for this approach which points to @/components/App-Expoless.

## CircleCI
The following is run when a commit is pushed to GitHub. Currently the publish job is commented out because it is not tied to an expo account.

### Build Job
* Jest tests are run to ensure there are no breaking changes
* Linter is run to show issues in the commit 

### Expo Publish Job
Builds can be found for successful publish jobs at the following link (replace the release-channel value with the branch name, default is the value for master):

[https://expo.io/@username/app_name?release-channel=development](https://expo.io/@username/app_name?release-channel=development)

* Master Branch
  * Publishes the app the the default Expo environment
* Other Branches
  * Publishes the app to an Expo environment with the branch name
  * Can be used to share with team members before pushing to production