import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const languageSelectorStyles = StyleSheet.create({
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: COLORS.primaryShade,
  },
  languageText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textLanguage,
    flex: 1,
    textAlign: 'center',
    
  },
  swapButton: {
    backgroundColor: COLORS.thirdClear,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  swapIcon: {
    color: COLORS.third,
    fontSize: 25,
    fontWeight: 'bold',
  },
});