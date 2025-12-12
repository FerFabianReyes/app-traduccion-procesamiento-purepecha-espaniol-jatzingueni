import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PagPrincipalScreen from '../screens/PagPrincipalScreen';
import TranslatorScreen from '../screens/TranslatorScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PagPrincipal"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          animation: 'simple_push', 
          gestureEnabled: false,
        }}
      >
        <Stack.Screen 
          name="PagPrincipal" 
          component={PagPrincipalScreen}
          options={{
            animation: 'simple_push',
          }}
        />
        <Stack.Screen 
          name="Translator" 
          component={TranslatorScreen}
          options={{
            animation: 'simple_push',
          }}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen}
          options={{
            animation: 'simple_push',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;