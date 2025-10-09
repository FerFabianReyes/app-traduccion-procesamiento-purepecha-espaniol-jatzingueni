import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../colors';

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 60,
    ...Platform.select({
      web: {
        position: 'relative',
        zIndex: 1000, // Importante para web
      }
    })
  },
  menuButton: {
    width: 30,
    height: 20,
    position: 'absolute',
    margin: 40,
    justifyContent: 'space-between',
    zIndex: 1001, // Asegura que esté por encima
    ...Platform.select({
      web: {
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        // Ayuda al click en web
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
      }
    })
  },
  menuButtonWeb: {
    transform: [{ translateZ: 0 }], // Ayuda con el rendering en web
  },
  menuLine: {
    width: '100%',
    height: 3,
    backgroundColor: COLORS.fourth,
    borderRadius: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.fourth,
    position: 'left',
    top: 65,
    left: 10,
    right: 0,
    textAlign: 'left',
    ...Platform.select({
      web: {
        pointerEvents: 'none', // No interferir con clicks
      }
    })
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  }
});