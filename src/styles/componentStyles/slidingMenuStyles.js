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
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  
  menuBackground: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
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
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
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