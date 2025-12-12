import React from 'react';
import { View, Text, TouchableOpacity, Platform, Pressable } from 'react-native';
import { headerStyles } from '../../styles/componentStyles/headerStyles';
import Icon from './IconJatzi';

const Header = ({ title = "J'atzingueni", onMenuPress }) => {
  const handlePress = React.useCallback(() => {
    onMenuPress();
  }, [onMenuPress]);

  // En web móvil, usar Pressable en lugar de TouchableOpacity
  const ButtonComponent = Platform.OS === 'web' ? Pressable : TouchableOpacity;

  return (
    <View style={headerStyles.header}>
      <ButtonComponent
        style={[
          headerStyles.menuButton,
          Platform.OS === 'web' && headerStyles.menuButtonWeb
        ]}
        onPress={handlePress}
        activeOpacity={Platform.OS === 'web' ? undefined : 0.6}
      >
        <View style={headerStyles.menuLine}></View>
        <View style={headerStyles.menuLine}></View>
        <View style={headerStyles.menuLine}></View>
      </ButtonComponent>

      {/* Contenedor para texto e ícono */}
      <View style={headerStyles.titleContainer}>
        <Text style={headerStyles.title}>{title}</Text>
        <View style={headerStyles.iconContainer}>
          <Icon />
        </View>
      </View>
    </View>
  );
};

export default Header;