import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const noteCardStyles = StyleSheet.create({
  noteCard: {
    backgroundColor: COLORS.secondaryShade,
    borderWidth: 2,
    borderColor: COLORS.cardBorder,
    borderRadius: 8,
    marginBottom: 15,
    minHeight: 100,
    padding: 15,
  },
  noteInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlignVertical: 'top',
  },
});