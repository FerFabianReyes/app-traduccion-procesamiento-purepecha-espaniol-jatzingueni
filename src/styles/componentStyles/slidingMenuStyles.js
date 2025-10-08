import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../colors';
const { width, height } = Dimensions.get('window');
export const slidingMenuStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.23)',
    flexDirection: 'row',
  },
  menuContainer: {
    width: width * 0.55,
    height: height,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    borderTopRightRadius: 50,    //  esquinas derechas
    borderBottomRightRadius: 50, //  esquinas derechas
    overflow: 'hidden',          // el degradado respete los bordes
  },
  menuBackground: {
    flex: 1,
    backgroundColor: COLORS.third,
    borderTopRightRadius: 25,    // Repetir en el degradado
    borderBottomRightRadius: 25, // Repetir en el degradado
  },
  menuHeader: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.thirdClear,
  },
  menuTitle: {
    color: COLORS.third,
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuItems: {
    flex: 1,
    paddingTop: 20,
  },
menuItem: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 30,
  paddingHorizontal: 30,
  margin: 15,
  borderRadius: 15,
  borderColor: COLORS.thirdClear,  
  borderWidth: 2,                  
},
  menuItemText: {
    fontSize: 18,
    color: COLORS.fourth,
    fontWeight: '500',
  },
  menuFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#00000000',
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.thirdClear,
    fontSize: 12,
  },
});