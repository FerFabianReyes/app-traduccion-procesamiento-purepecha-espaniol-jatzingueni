import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import { createWorker } from 'tesseract.js';

export default function OCRTranslateScreen() {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [worker, setWorker] = useState(null);
  const [autoProcessEnabled, setAutoProcessEnabled] = useState(true);

  // Inicializar Tesseract worker al montar
  useEffect(() => {
    initializeTesseract();
    return () => {
      if (worker) {
        worker.terminate();
      }
    };
  }, []);

  const initializeTesseract = async () => {
    try {
      const tesseractWorker = await createWorker('spa', 1, {
        logger: m => console.log(m)
      });
      setWorker(tesseractWorker);
    } catch (error) {
      console.error('Error inicializando Tesseract:', error);
    }
  };

  // Tomar foto y procesar automáticamente
  const takePhotoAndProcess = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos acceso a tu cámara');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      const photoUri = result.assets[0].uri;
      setImage(photoUri);
      setExtractedText('');
      setTranslatedText('');
      
      // Procesar automáticamente si está habilitado
      if (autoProcessEnabled) {
        await processOCR(photoUri);
      }
    }
  };

  // Seleccionar de galería y procesar automáticamente
  const pickImageAndProcess = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos acceso a tus fotos');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const photoUri = result.assets[0].uri;
      setImage(photoUri);
      setExtractedText('');
      setTranslatedText('');
      
      // Procesar automáticamente si está habilitado
      if (autoProcessEnabled) {
        await processOCR(photoUri);
      }
    }
  };

  // Preprocesar imagen para mejor OCR
  const preprocessImage = async (uri) => {
    try {
      const manipulated = await manipulateAsync(
        uri,
        [{ resize: { width: 2000 } }],
        { 
          compress: 1,
          format: SaveFormat.PNG
        }
      );
      return manipulated.uri;
    } catch (error) {
      console.error('Error preprocesando imagen:', error);
      return uri;
    }
  };

  // Procesar OCR con Tesseract
  const processOCR = async (imageUri = image) => {
    if (!imageUri) {
      Alert.alert('Error', 'Selecciona una imagen primero');
      return;
    }

    if (!worker) {
      Alert.alert('Inicializando', 'El OCR se está cargando, intenta nuevamente en un momento...');
      await initializeTesseract();
      return;
    }

    setLoading(true);
    setExtractedText('');
    setTranslatedText('');
    setProgress(0);

    try {
      // Preprocesar imagen
      const processedImage = await preprocessImage(imageUri);

      // Reconocer texto
      const { data } = await worker.recognize(processedImage, {
        tessedit_pageseg_mode: '1',
      }, {
        logger: m => {
          if (m.status === 'recognizing text') {
            setProgress(Math.round(m.progress * 100));
          }
        }
      });

      if (data.text.trim()) {
        const cleanedText = data.text
          .trim()
          .replace(/\n{3,}/g, '\n\n')
          .replace(/\s+/g, ' ');
        
        setExtractedText(cleanedText);
        
        // Simular traducción (aquí conectarías tu API/modelo de traducción)
        translateToPurepecha(cleanedText);
      } else {
        Alert.alert('Sin texto', 'No se detectó texto. Intenta con mejor iluminación.');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo procesar: ' + error.message);
      console.error(error);
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  // Función simulada de traducción - REEMPLAZA CON TU API REAL
  const translateToPurepecha = (text) => {
    // Aquí conectarías tu modelo/API de traducción español-purépecha
    // Por ahora solo mostramos un placeholder
    setTranslatedText('(Traducción en desarrollo - conecta aquí tu modelo español-purépecha)');
    
    // Ejemplo de cómo podría ser con una API:
    /*
    fetch('https://tu-api.com/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, from: 'es', to: 'pur' })
    })
    .then(res => res.json())
    .then(data => setTranslatedText(data.translation))
    .catch(err => console.error(err));
    */
  };

  // Limpiar y empezar de nuevo
  const clearAll = () => {
    setImage(null);
    setExtractedText('');
    setTranslatedText('');
    setProgress(0);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Español → Purépecha</Text>
        <Text style={styles.subtitle}>Captura y traduce al instante</Text>
      </View>

      {!image ? (
        // Pantalla inicial - Botones principales
        <View style={styles.mainScreen}>
          <View style={styles.iconContainer}>
            <Text style={styles.bigIcon}>📸</Text>
            <Text style={styles.instructionText}>
              Captura o selecciona una imagen con texto en español
            </Text>
          </View>

          <View style={styles.mainButtonContainer}>
            <TouchableOpacity 
              style={styles.mainButton} 
              onPress={takePhotoAndProcess}
            >
              <Text style={styles.mainButtonIcon}>📷</Text>
              <Text style={styles.mainButtonText}>Tomar Foto</Text>
              <Text style={styles.mainButtonSubtext}>Abrir cámara</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.mainButton} 
              onPress={pickImageAndProcess}
            >
              <Text style={styles.mainButtonIcon}>🖼️</Text>
              <Text style={styles.mainButtonText}>Elegir Imagen</Text>
              <Text style={styles.mainButtonSubtext}>Desde galería</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featuresList}>
            <Text style={styles.featureItem}>✓ Reconocimiento automático</Text>
            <Text style={styles.featureItem}>✓ Traducción instantánea</Text>
            <Text style={styles.featureItem}>✓ 100% gratis y offline</Text>
          </View>
        </View>
      ) : (
        // Pantalla de resultados
        <View style={styles.resultScreen}>
          <View style={styles.imagePreview}>
            <Image source={{ uri: image }} style={styles.previewImage} />
            <TouchableOpacity 
              style={styles.changePhotoButton}
              onPress={clearAll}
            >
              <Text style={styles.changePhotoText}>🔄 Tomar otra foto</Text>
            </TouchableOpacity>
          </View>

          {loading && (
            <View style={styles.loadingBox}>
              <ActivityIndicator size="large" color="#8b5cf6" />
              <Text style={styles.loadingText}>
                {progress > 0 ? `Extrayendo texto... ${progress}%` : 'Procesando imagen...'}
              </Text>
            </View>
          )}

          {!loading && !extractedText && (
            <TouchableOpacity 
              style={styles.retryButton}
              onPress={() => processOCR()}
            >
              <Text style={styles.retryButtonText}>🔍 Extraer Texto</Text>
            </TouchableOpacity>
          )}

          {extractedText && (
            <View style={styles.translationContainer}>
              <View style={styles.textCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardIcon}>🇲🇽</Text>
                  <Text style={styles.cardTitle}>Español</Text>
                </View>
                <ScrollView style={styles.textScroll}>
                  <Text style={styles.textContent} selectable>
                    {extractedText}
                  </Text>
                </ScrollView>
              </View>

              <View style={styles.arrowContainer}>
                <Text style={styles.arrow}>↓</Text>
              </View>

              <View style={[styles.textCard, styles.translationCard]}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardIcon}>🌎</Text>
                  <Text style={styles.cardTitle}>Purépecha</Text>
                </View>
                <ScrollView style={styles.textScroll}>
                  <Text style={styles.textContent} selectable>
                    {translatedText}
                  </Text>
                </ScrollView>
              </View>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#8b5cf6',
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#e9d5ff',
    marginTop: 5,
  },
  
  // Pantalla principal
  mainScreen: {
    padding: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  bigIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
  },
  mainButtonContainer: {
    gap: 15,
    marginBottom: 30,
  },
  mainButton: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  mainButtonIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  mainButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  mainButtonSubtext: {
    fontSize: 14,
    color: '#94a3b8',
  },
  featuresList: {
    backgroundColor: '#f0f9ff',
    padding: 20,
    borderRadius: 12,
    gap: 8,
  },
  featureItem: {
    fontSize: 15,
    color: '#0369a1',
    fontWeight: '500',
  },

  // Pantalla de resultados
  resultScreen: {
    padding: 20,
  },
  imagePreview: {
    marginBottom: 20,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#e2e8f0',
  },
  changePhotoButton: {
    backgroundColor: '#64748b',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  changePhotoText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  loadingBox: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
    gap: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loadingText: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '600',
  },
  retryButton: {
    backgroundColor: '#10b981',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  translationContainer: {
    gap: 0,
  },
  textCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  translationCard: {
    backgroundColor: '#fef3c7',
    borderWidth: 2,
    borderColor: '#fbbf24',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  textScroll: {
    maxHeight: 200,
  },
  textContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#334155',
  },
  arrowContainer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  arrow: {
    fontSize: 32,
    color: '#8b5cf6',
  },
});