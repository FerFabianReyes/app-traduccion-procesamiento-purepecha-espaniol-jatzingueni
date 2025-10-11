import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppState } from 'react-native';
import TranslatorScreen from '../screens/TranslatorScreen';
import AboutScreen from '../screens/AboutScreen';
import EjemploScreen from '../screens/OCR';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const navigationRef = useRef(null);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      // Detectar cuando la app vuelve del background a activo
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App volvió al foreground - forzando re-render');
        
        // Forzar un re-render de la pantalla actual
        if (navigationRef.current) {
          const currentRoute = navigationRef.current.getCurrentRoute();
          if (currentRoute) {
            // Forzar navegación a la misma pantalla para re-renderizar
            navigationRef.current.reset({
              index: 0,
              routes: [{ name: currentRoute.name }],
            });
          }
        }
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Translator"
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
        <Stack.Screen 
          name="OCR" 
          component={EjemploScreen}
          options={{
            animation: 'simple_push',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;