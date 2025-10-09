import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { COLORS } from './src/styles/colors';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <AppNavigator />
    </>
  );
}