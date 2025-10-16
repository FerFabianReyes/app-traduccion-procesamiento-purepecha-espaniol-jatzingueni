import React from 'react';
import { SafeAreaView, View, ScrollView, Platform, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import Header from '../components/common/Header';
import LanguageSelector from '../components/common/LanguageSelector';
import NoteCard from '../components/translator/NoteCard';
import SlidingMenu from '../components/common/SlidingMenu';
import { globalStyles } from '../styles/globalStyles';
import Background from '../components/backgronds/Background';
import { useAppLogic } from '../hooks/useAppLogic';
import Loading from '../components/common/Loading';

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
    captureAndProcess,
    handleManualTranslate, // 🆕 NUEVA FUNCIÓN
    isLoading,
    isTranslating, // 🆕 NUEVO ESTADO
  } = useAppLogic();

  const Container = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <Background>
      <Container style={globalStyles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
          <Header onMenuPress={handleMenuPress} />

          <View style={globalStyles.mainContent}>
            <LanguageSelector
              onCamera={() => captureAndProcess(true)}
              onGallery={() => captureAndProcess(false)}
              sourceLanguage={sourceLanguage}
              targetLanguage={targetLanguage}
              onSwap={swapLanguages}
              isLoading={isLoading}
            />
            
            {/* 🆕 Loading muestra diferente mensaje según lo que esté haciendo */}
            <Loading
              visible={isLoading}
              message={isTranslating ? "Traduciendo..." : "Extrayendo texto de la imagen..."}
            />
            
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
                  placeholderTextColor="black"
                />
              ))}
            </ScrollView>
            <TouchableOpacity 
              style={[
                globalStyles.button, 
                (isLoading || !notes[0]?.trim()) && globalStyles.buttonDisabled
              ]}
              onPress={handleManualTranslate}
              disabled={isLoading || !notes[0]?.trim()} // Deshabilitar si está cargando o no hay texto
            >
              <Text style={globalStyles.translateText}>
                {isTranslating ? "Traduciendo..." : "Traducir"}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <SlidingMenu
          isVisible={isMenuVisible}
          onClose={closeMenu}
        />
      </Container>
    </Background>
  );
};

export default TranslatorScreen;