import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { extractTextWithOCR } from '../services/ocrService';

export const useOCR = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  // ⭐ useCallback para todas las funciones
  const requestPermission = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso necesario', 'Se necesita permiso para usar la cámara');
      return false;
    }
    return true;
  }, []);

  const takePhoto = useCallback(async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return false;

    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        base64: true,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        await processImage(result.assets[0].base64);
        return true;
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo tomar la foto');
    }
    return false;
  }, [requestPermission]);

  const pickImage = useCallback(async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        base64: true,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        await processImage(result.assets[0].base64);
        return true;
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo seleccionar la imagen');
    }
    return false;
  }, []);

  const processImage = useCallback(async (base64Image) => {
    if (!base64Image) return;

    setLoading(true);
    setExtractedText('');

    try {
      const text = await extractTextWithOCR(base64Image);
      setExtractedText(text);
      return text;
    } catch (error) {
      Alert.alert('Error OCR', error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearAll = useCallback(() => {
    setImage(null);
    setExtractedText('');
  }, []);

  const updateExtractedText = useCallback((text) => {
    setExtractedText(text);
  }, []);

  return {
    // Estado
    image,
    extractedText,
    loading,
    
    // Acciones (todas con useCallback)
    takePhoto,
    pickImage,
    processImage,
    clearAll,
    updateExtractedText,
    
    // Setters
    setImage: useCallback((img) => setImage(img), []),
    setExtractedText: useCallback((text) => setExtractedText(text), []),
  };
};