import React from 'react';
import { View, TextInput } from 'react-native';
import { noteCardStyles } from '../../styles/componentStyles/noteCardStyles';

const NoteCard = ({ 
  value, 
  onChangeText, 
  placeholder = "Escribe aquí...", 
  isTranslated = false 
}) => {
  return (
    <View style={noteCardStyles.noteCard}>
      <TextInput
        style={[
          noteCardStyles.noteInput,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#C8C8C8"
        multiline={true}
        textAlignVertical="top"
      />
    </View>
  );
};

export default NoteCard;