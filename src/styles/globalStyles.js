import { StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { COLORS } from './colors';

const { height } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: StatusBar.currentHeight || 0,
    padding: 20,
  },
  mainContent: {
    backgroundColor: COLORS.third,
    borderRadius: 40,
    padding: 20,
    marginTop: 20,
    minHeight: height * 0.5,
    
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    
    // Sombra para Android
    elevation: 28,
  }
});