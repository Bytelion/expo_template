import { Alert, Share } from 'react-native';

export default async ({ message, title, url }) => {
  try {
    await Share.share({
      message,
      title,
      url,
    });
  } catch (error) {
    Alert.alert('Error', error.message, [{ text: 'Dismiss', style: 'cancel' }]);
  }
};
