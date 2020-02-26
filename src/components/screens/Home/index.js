import React, { useState, Fragment } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { connect } from '../../common/Helpers';
import { colors, device } from '../../common/theme';
import { Image } from '../../common/Image';
import { Icon, Row, Touchable, View } from '../../common/Layout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.smokeyWhite,
    flex: 1,
  },
  image: {
    height: '90%',
    marginLeft: device.width * 0.25,
    width: '50%',
  },
  logout: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  statusBar: {
    backgroundColor: colors.primaryBlue,
    height: device.statusBarHeight,
  },
  topBar: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.darkGray,
    height: 100,
    justifyContent: 'center',
  },
});

const HomeScreen = ({ getProduct, navigation, removeAuth }) => {
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
      <View style={styles.statusBar} />
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
