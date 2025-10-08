import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const languageSelectorStyles = StyleSheet.create({
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  languageText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primaryClear,
    flex: 1,
    textAlign: 'center',
  },
  swapButton: {
    backgroundColor: COLORS.primaryClear,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  swapIcon: {
    color: COLORS.primary,
    fontSize: 25,
    fontWeight: 'bold',
  },
});