import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TranslatorScreen from '../screens/TranslatorScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Translator"
        screenOptions={{
          headerShown: false, // Ocultar header por defecto 
        }}
      >
        <Stack.Screen 
          name="Translator" 
          component={TranslatorScreen} 
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;