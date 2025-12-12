import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const headerPrincipalStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'transparent',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 20,
    backgroundColor: COLORS.thirdStrong,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 500,
  },

  mainTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: COLORS.textLanguage,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuButton: {
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});