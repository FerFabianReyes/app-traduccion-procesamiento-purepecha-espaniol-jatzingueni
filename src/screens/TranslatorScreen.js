import React from 'react';
import { SafeAreaView, View, ScrollView, Platform, StyleSheet } from 'react-native';
import Header from '../components/common/Header';
import LanguageSelector from '../components/common/LanguageSelector';
import NoteCard from '../components/translator/NoteCard';
import SlidingMenu from '../components/common/SlidingMenu';
import { useTranslator } from '../hooks/useTranslator';
import { globalStyles } from '../styles/globalStyles';
import Background from '../components/common/Background'; 

const TranslatorScreen = () => {
  const {
    notes,
    sourceLanguage,
    targetLanguage,
    isMenuVisible,
    updateNote,
    swapLanguages,
    handleMenuPress,
    closeMenu,
  } = useTranslator();

  const Container = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <Background>
      <Container style={globalStyles.container}>
        {/* Header fijo */}
        <Header onMenuPress={handleMenuPress} />

        <View style={globalStyles.mainContent}>
          {/* LanguageSelector fijo */}
          <LanguageSelector
            sourceLanguage={sourceLanguage}
            targetLanguage={targetLanguage}
            onSwap={swapLanguages}
          />

          {/* Solo los NoteCards tienen scroll */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={true}
            keyboardShouldPersistTaps="handled"
          >
            {notes.map((note, index) => (
              <NoteCard
                key={index}
                value={note}
                onChangeText={(text) => updateNote(index, text)}
                placeholder={index === 0 ? 'Texto a traducir...' : 'Traducción...'}
                isTranslated={index === 1}
              />
            ))}
          </ScrollView>
        </View>

        <SlidingMenu
          isVisible={isMenuVisible}
          onClose={closeMenu}
        />
      </Container>
    </Background>
  );
};

export default TranslatorScreen;