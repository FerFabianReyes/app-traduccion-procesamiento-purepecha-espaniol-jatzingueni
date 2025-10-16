import { useState, useCallback } from 'react';

export const useTranslator = () => {
  const [notes, setNotes] = useState(['', '']);
  const [sourceLanguage, setSourceLanguage] = useState('es');
  const [targetLanguage, setTargetLanguage] = useState('tsz');
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // ⭐ useCallback PARA ESTABILIZAR updateNote
  const updateNote = useCallback((index, text) => {
    setNotes(prevNotes => {
      const newNotes = [...prevNotes];
      newNotes[index] = text;
      return newNotes;
    });
  }, []); // ← Dependencias vacías porque no usa estado externo

  const swapLanguages = useCallback(() => {
    setSourceLanguage(prev => {
      const newTarget = prev;
      setTargetLanguage(newTarget);
      return targetLanguage;
    });
    setNotes(prevNotes => [prevNotes[1], prevNotes[0]]);
  }, [targetLanguage]);

  const handleMenuPress = useCallback(() => {
    setIsMenuVisible(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuVisible(false);
  }, []);

  const setSourceLang = useCallback((lang) => {
    setSourceLanguage(lang);
  }, []);

  const setTargetLang = useCallback((lang) => {
    setTargetLanguage(lang);
  }, []);

  return {
    notes,
    sourceLanguage,
    targetLanguage,
    isMenuVisible,
    updateNote, // ← Ahora estable entre renders
    swapLanguages,
    handleMenuPress,
    closeMenu,
    setSourceLanguage: setSourceLang,
    setTargetLanguage: setTargetLang,
  };
};