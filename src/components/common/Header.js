import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { headerStyles } from '../../styles/componentStyles/headerStyles';
import Icon from './IconJatzi';

const Header = ({ title = "J'atzingueni", onMenuPress }) => {
  return (
    <View style={headerStyles.header}>
      <TouchableOpacity 
        style={[
          headerStyles.menuButton,
          Platform.OS === 'web' && headerStyles.menuButtonWeb
        ]} 
        onPress={onMenuPress}
        onPressIn={Platform.OS === 'web' ? onMenuPress : undefined}
      >
        <View style={headerStyles.menuLine}></View>
        <View style={headerStyles.menuLine}></View>
        <View style={headerStyles.menuLine}></View>
      </TouchableOpacity>

      {/* Contenedor para texto e ícono */}
      <View style={headerStyles.titleContainer}>
        <Text style={headerStyles.title}>{title}</Text>
        <Icon/>
      </View>
    </View>
  );
};

export default Header;