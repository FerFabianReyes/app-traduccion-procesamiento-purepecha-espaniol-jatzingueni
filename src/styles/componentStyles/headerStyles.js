import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../colors';

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
    ...Platform.select({
      web: {
        position: 'relative',
        zIndex: 1000,
      }
    })
  },
  menuButton: {
    width: 30,
    height: 20,
    position: 'absolute',
    margin: 20,
    justifyContent: 'space-between',
    zIndex: 1001,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
      }
    })
  },
  menuButtonWeb: {
    transform: [{ translateZ: 0 }],
  },
  menuLine: {
    width: '100%',
    height: 3,
    backgroundColor: COLORS.fourth,
    borderRadius: 20,
  },
  // TÍTULO - Base
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: COLORS.fourth,
    textAlign: 'left',
  },
  // CONTENEDOR TÍTULO - Base para móvil
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    marginLeft: 70,
    flex: 1,
    maxWidth: '100%',
  },
  // CONTENEDOR ICON
  iconContainer: {
    width: 50,
    height: 50,
    flexShrink: 0,
  },
});