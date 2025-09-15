import React from 'react';
import { StatusBar } from 'react-native';
import TranslatorScreen from './src/screens/TranslatorScreen';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#be3b97ff" barStyle="light-content" />
      <TranslatorScreen />
    </>
  );
}