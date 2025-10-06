import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '../../../assets/logoJatzingueniClaro.svg';
import { Icon } from 'react-native-vector-icons/Icon';

export default function IconJatzi({ children }) {
  return (
    <View style={styles.container}>
      <Icon
        width="80%"
        height="80%"
        preserveAspectRatio="xMidYMid slice"
        style={StyleSheet.absoluteFillObject}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
});