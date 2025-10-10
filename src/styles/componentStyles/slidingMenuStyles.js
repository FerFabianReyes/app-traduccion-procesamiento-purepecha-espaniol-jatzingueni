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
    width: width * 0.6,
    height: height,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  
  menuBackground: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: COLORS.secondaryClear,
    overflow: 'hidden',
    shadowColor: COLORS.secondaryClear,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
  },
  
  menuContent: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
  menuHeader: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryClear,
  },
  
  menuTitle: {
    color: COLORS.secondary,
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
    borderColor: COLORS.itemMenu,
    borderWidth: 2,
    backgroundColor: COLORS.itemMenu,
  },
  
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: 'rgba(229, 255, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  
  menuItemText: {
    fontSize: 17,
    color: COLORS.fourth,
    fontWeight: '500',
    flex: 1,
  },
  
  menuFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#00000000',
  },
  
  footerText: {
    color: COLORS.secondaryClear,
    fontSize: 12,
  },
});