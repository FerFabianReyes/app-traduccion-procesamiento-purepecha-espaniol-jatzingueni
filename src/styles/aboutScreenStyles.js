import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './colors';
const { width, height } = Dimensions.get('window');
export const aboutScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 15,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.primaryClear,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  section: {
    marginBottom: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: COLORS.primary,
    lineHeight: 24,
  },
});