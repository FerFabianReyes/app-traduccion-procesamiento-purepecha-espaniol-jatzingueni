import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { languageSelectorStyles } from '../../styles/componentStyles/languageSelectorStyles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../styles/colors';



const languageItems = [
  {
    id: 1,
    screen: 'Header',
    icon: 'camera-outline',
    color: COLORS.third,
  },
];


const LanguageSelector = ({
  sourceLanguage = "Purépecha",
  targetLanguage = "Español",
  onSwap,
  onCamera
}) => {
  return (
    <View style={languageSelectorStyles.languageContainer}>
      <TouchableOpacity style={languageSelectorStyles.cameraButton} onPress={onCamera}>
      <View style={languageSelectorStyles.iconContainer}>
        <Ionicons
          name={languageItems[0].icon}
          size={24}
          color={languageItems[0].color}
        />
      </View>
      </TouchableOpacity>
      <Text style={languageSelectorStyles.languageText}>{sourceLanguage}</Text>

      <TouchableOpacity style={languageSelectorStyles.swapButton} onPress={onSwap}>
        <Text style={languageSelectorStyles.swapIcon}>⇄</Text>
      </TouchableOpacity>

      <Text style={languageSelectorStyles.languageText}>{targetLanguage}</Text>
    </View>
  );
};

export default LanguageSelector;