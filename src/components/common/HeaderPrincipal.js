import React from 'react';
import { View, Text, TouchableOpacity, Platform, Pressable, Dimensions } from 'react-native';
import { headerPrincipalStyles } from '../../styles/componentStyles/headerPrincipalStyles';
import Icon from './IconJatzi';
import { Ionicons } from '@expo/vector-icons';

const HeaderPrincipal = ({ onMenuPress }) => {
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;

  const handlePress = React.useCallback(() => {
    onMenuPress();
  }, [onMenuPress]);

  const ButtonComponent = Platform.OS === 'web' ? Pressable : TouchableOpacity;

  return (
    <View style={headerPrincipalStyles.headerContainer}>
      <View style={headerPrincipalStyles.header}>
         {/* Botón de menú a la izquierda */}
        <ButtonComponent
          style={headerPrincipalStyles.menuButton}
          onPress={handlePress}
          activeOpacity={Platform.OS === 'web' ? undefined : 0.6}
        >
          <Ionicons 
            name="menu-outline" 
            size={28} 
            color="#ececd0ff"
          />
        </ButtonComponent>

        {/* Título e ícono a la Derecha */}
        <View style={headerPrincipalStyles.titleContainer}>
          <Text style={headerPrincipalStyles.mainTitle}>J'atzingueni</Text>
          <View style={headerPrincipalStyles.iconContainer}>
            <Icon />
          </View>
        </View>

       
      </View>
    </View>
  );
};

export default HeaderPrincipal;