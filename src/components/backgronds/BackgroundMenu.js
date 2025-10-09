import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BackgroundSvg from '../../../assets/fondoJatzingueniMenu.svg';
import { COLORS } from '../../styles/colors';

const { height, width } = Dimensions.get('window');

export default function Background({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer} pointerEvents="none">
        <BackgroundSvg
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary
  },
  svgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  }
});