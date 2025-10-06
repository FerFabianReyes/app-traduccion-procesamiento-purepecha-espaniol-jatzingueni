import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogoSvg from '../../../assets/logoJatzingueniClaro.svg';

export default function Icon({ size = 350, top = -75, left = 110, right, bottom }) {
  return (
    <View 
      style={[
        styles.container, 
        { 
          width: size, 
          height: size,
          top,
          left,
          right,
          bottom,
          
        }
      ]}
      pointerEvents="none"
    >
      <LogoSvg
        width={size}
        height={size}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1110,
  },
});