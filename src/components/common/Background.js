import React from 'react';
import { StyleSheet, View } from 'react-native';
import BackgroundSvg from '../../../assets/fondoJatzingueni.svg';
import { COLORS } from '../../styles/colors';

export default function Background({ children }) {
  return (
    <View style={styles.container}>
      <BackgroundSvg
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
    backgroundColor: COLORS.secondary
  },
});