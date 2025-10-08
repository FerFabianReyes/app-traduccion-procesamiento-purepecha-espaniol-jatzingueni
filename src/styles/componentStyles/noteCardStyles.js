import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const noteCardStyles = StyleSheet.create({
  noteCard: {
    backgroundColor: COLORS.primaryShade,
    borderWidth: 2,
    borderColor: COLORS.cardBorder,
    borderRadius: 8,
    marginBottom: 15,
    height: 150,
    padding: 15,
    shadowColor: COLORS.primaryStrong,
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 2,
  },

  noteInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlignVertical: 'top',
  },
});