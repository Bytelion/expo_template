# Expo React Native Template

This template is built to start a barebones React Native project using Expo.
The current Expo version is [Expo SDK 40](https://blog.expo.io/expo-sdk-40-is-now-available-d4d73e67da33).

## Project Setup
### Install Expo CLI
Install the latest version of the [Expo CLI](https://docs.expo.io/versions/latest/get-started/installation/).
### Terminal Setup
```javascript
// Install the dependencies
yarn install

// Run project with Expo
expo start
```

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
