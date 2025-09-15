import { useState } from 'react';

export const useTranslator = () => {
  const [notes, setNotes] = useState(['', '']);
  const [sourceLanguage, setSourceLanguage] = useState('Purépecha');
  const [targetLanguage, setTargetLanguage] = useState('Español');
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Nuevo estado

  const updateNote = (index, text) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = text;
    setNotes(updatedNotes);
  };

  const addNote = () => {
    setNotes([...notes, '']);
  };

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const handleMenuPress = () => {
    setIsMenuVisible(true); // Abre el menú
  };

  const closeMenu = () => {
    setIsMenuVisible(false); // Cierra el menú
  };

  return {
    notes,
    sourceLanguage,
    targetLanguage,
    isMenuVisible,
    updateNote,
    addNote,
    swapLanguages,
    handleMenuPress,
    closeMenu,
  };
};