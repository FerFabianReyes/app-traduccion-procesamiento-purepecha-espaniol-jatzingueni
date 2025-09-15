import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { languageSelectorStyles } from '../../styles/componentStyles/languageSelectorStyles';

const LanguageSelector = ({ 
  sourceLanguage = "Purépecha", 
  targetLanguage = "Español", 
  onSwap 
}) => {
  return (
    <View style={languageSelectorStyles.languageContainer}>
      <Text style={languageSelectorStyles.languageText}>{sourceLanguage}</Text>
      
      <TouchableOpacity style={languageSelectorStyles.swapButton} onPress={onSwap}>
        <Text style={languageSelectorStyles.swapIcon}>⇄</Text>
      </TouchableOpacity>
      
      <Text style={languageSelectorStyles.languageText}>{targetLanguage}</Text>
    </View>
  );
};

export default LanguageSelector;