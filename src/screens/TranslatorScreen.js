import React from 'react';
import { SafeAreaView, View, ScrollView, Platform, KeyboardAvoidingView, TouchableOpacity, Text, Dimensions } from 'react-native';
import Header from '../components/common/Header';
import LanguageSelector from '../components/common/LanguageSelector';
import NoteCard from '../components/translator/NoteCard';
import SlidingMenu from '../components/common/SlidingMenu';
import { globalStyles } from '../styles/globalStyles';
import Background from '../components/backgronds/Background';
import { useAppLogic } from '../hooks/useAppLogic';
import Loading from '../components/common/Loading';

const TranslatorScreen = () => {
  const { width } = Dimensions.get('window');
  const isWebLarge = Platform.OS === 'web' && width >= 1024;
  const isWebMedium = Platform.OS === 'web' && width >= 768 && width < 1024;
  const isHorizontal = isWebMedium || isWebLarge;

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
    handleManualTranslate, 
    isLoading,
    isTranslating, 
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
 
            <Loading
              visible={isLoading}
              message={isTranslating ? "Traduciendo..." : "Extrayendo texto de la imagen..."}
            />
            
            {isHorizontal ? (
              // Layout horizontal para web (desktop/tablet)
              <View style={globalStyles.cardsContainer}>
                <View style={globalStyles.cardWrapper}>
                  <NoteCard
                    value={notes[0]}
                    onChangeText={(text) => updateNote(0, text)}
                    placeholder="Texto a traducir..."
                    isTranslated={false}
                    placeholderTextColor="black"
                  />
                </View>
                <View style={globalStyles.cardWrapper}>
                  <NoteCard
                    value={notes[1]}
                    onChangeText={(text) => updateNote(1, text)}
                    placeholder="Traducción..."
                    isTranslated={true}
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            ) : (
              // Layout vertical para móvil
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
            )}

            <TouchableOpacity 
              style={[
                globalStyles.button, 
                (isLoading || !notes[0]?.trim()) && globalStyles.buttonDisabled
              ]}
              onPress={handleManualTranslate}
              disabled={isLoading || !notes[0]?.trim()}
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