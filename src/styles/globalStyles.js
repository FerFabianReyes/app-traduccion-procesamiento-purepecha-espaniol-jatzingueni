import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { COLORS } from './colors';

const { height } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: StatusBar.currentHeight || 0,
  },
  mainContent: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    margin: 30,
    padding: 20,
    marginTop: 0,
    minHeight: height * 0.6,
  },
});