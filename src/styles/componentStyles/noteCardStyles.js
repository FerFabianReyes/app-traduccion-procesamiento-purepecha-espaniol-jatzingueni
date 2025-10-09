import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const noteCardStyles = StyleSheet.create({
  noteCard: {
    backgroundColor: COLORS.thirdShade,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 8,
    marginBottom: 15,
    height: 130,
    padding: 15,
    //shadowColor: COLORS.primary,
    //shadowOpacity: 0.2,
    //shadowRadius: 10,
    //elevation: 3,
  },

  noteInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlignVertical: 'top',
  },
});