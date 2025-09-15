import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { headerStyles } from '../../styles/componentStyles/headerStyles';

const Header = ({ title = "Kuinchekua", onMenuPress }) => {
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

      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
};

export default Header;