import React from 'react';
import { StatusBar } from 'react-native';
import TranslatorScreen from './src/screens/TranslatorScreen';
import { COLORS } from './src/styles/colors';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor= {COLORS.primary}  barStyle="light-content" />
      <TranslatorScreen />
    </>
  );
}