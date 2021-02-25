import React from 'react';
import { connect } from '@Helpers';
import { View } from '@Layout';
import styles from './styles';

const HomeScreen = () => (
  <>
    <View style={styles.screenView} />
  </>
);

export default connect()(HomeScreen);
