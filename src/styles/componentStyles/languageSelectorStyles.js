import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const languageSelectorStyles = StyleSheet.create({
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  languageText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.fourth,
    flex: 1,
    textAlign: 'center',
  },
  swapButton: {
    backgroundColor: COLORS.fourth,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  swapIcon: {
    color: COLORS.secondary,
    fontSize: 25,
    fontWeight: 'bold',
  },
});