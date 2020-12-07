import React, { Fragment } from 'react';
import { Alert } from 'react-native';
import { connect } from '@components/common/Helpers';
import { colors, device } from '@components/common/theme';
import { Image } from '@components/common/Image';
import { Icon, Row, Touchable, View } from '@components/common/Layout';
import styles from './styles';

const HomeScreen = ({ navigation, removeAuth }) => {
  const logout = () => {
    Alert.alert('Logout', `Are you sure you would like to logout?`, [
      { text: 'No', style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => {
          navigation.goBack(null);
          removeAuth();
        },
      },
    ]);
  };

  return (
    <Fragment>
      <Row style={styles.topBar}>
        <Image name="appIcon" style={styles.image} />
        <Touchable onPress={() => logout()} style={styles.logout}>
          <Icon
            name="logout"
            size={device.width * 0.05}
            color={colors.black}
            community
          />
        </Touchable>
      </Row>
      <View style={styles.container} />
    </Fragment>
  );
};

export default connect()(HomeScreen);
