import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../colors';

const { width } = Dimensions.get('window');

// Breakpoints estándar de web
const isWebLarge = Platform.OS === 'web' && width >= 1024;
const isWebMedium = Platform.OS === 'web' && width >= 768 && width < 1024;

export const noteCardStyles = StyleSheet.create({
  noteCard: {
    backgroundColor: COLORS.thirdShade,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 8,
    marginBottom: Platform.OS === 'web' && (isWebMedium || isWebLarge) ? 0 : 15,
    height: Platform.OS === 'web' && (isWebMedium || isWebLarge) ? 200 : 130,
    padding: 15,
  },

  noteInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlignVertical: 'top',
  },
});