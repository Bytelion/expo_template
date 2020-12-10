import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export default async () => {
  // Can only be used on a physical device
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      return;
    }

    // POST the token to your backend server from where you can retrieve it to send push notifications.
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    // userService.updatePushToken(token);
  }
};
