import { StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { COLORS } from './colors';

const { height, width } = Dimensions.get('window');

// Breakpoints estándar de web
const isWebLarge = Platform.OS === 'web' && width >= 1024; // Desktop
const isWebMedium = Platform.OS === 'web' && width >= 768 && width < 1024; // Tablet
const isWebSmall = Platform.OS === 'web' && width < 768; // Mobile en web

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: StatusBar.currentHeight || 0,
    padding: Platform.OS === 'web' ? (isWebLarge ? 40 : isWebMedium ? 30 : 20) : 20,
  },
  
  mainContent: {
    backgroundColor: COLORS.third,
    borderRadius: 40,
    padding: Platform.OS === 'web' ? (isWebLarge ? 30 : 20) : 20,
    marginTop: 20,
    minHeight: Platform.OS === 'web' ? (isWebLarge ? height * 0.7 : height * 0.6) : height * 0.5,
    
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
  },

  cardsContainer: {
    flexDirection: isWebMedium || isWebLarge ? 'row' : 'column',
    justifyContent: isWebMedium || isWebLarge ? 'space-between' : 'flex-start',
    alignItems: isWebMedium || isWebLarge ? 'stretch' : 'stretch',
    gap: isWebMedium || isWebLarge ? 20 : 0,
    marginBottom: 20,
  },

  cardWrapper: {
    flex: isWebMedium || isWebLarge ? 1 : undefined,
  },

  button: {
    backgroundColor: COLORS.thirdClear,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: Platform.OS === 'web' ? 0 : 20,
    minHeight: 50,
  },
  
  buttonDisabled: {
    backgroundColor: COLORS.thirdClear,
    opacity: 0.6,
  },
  
  translateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});