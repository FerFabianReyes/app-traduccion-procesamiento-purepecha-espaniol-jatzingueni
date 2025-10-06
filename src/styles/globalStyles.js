import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { COLORS } from './colors';

const { height } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: StatusBar.currentHeight || 0,
  },
  mainContent: {
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    //margin: 30,
    padding: 20,
    marginTop: 0,
    minHeight: height,
  },
});