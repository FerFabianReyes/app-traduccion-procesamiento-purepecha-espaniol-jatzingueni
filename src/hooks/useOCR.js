import { useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { extractTextWithOCR } from '../services/ocrService';

export const useOCR = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  // Solicitar permisos de cámara
  const requestPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso necesario', 'Se necesita permiso para usar la cámara');
      return false;
    }
    return true;
  };

  // Tomar foto con la cámara
  const takePhoto = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

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
  };

  // Seleccionar imagen de la galería
  const pickImage = async () => {
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
  };

  // Procesar imagen con OCR
  const processImage = async (base64Image) => {
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
  };


  // Limpiar todo
  const clearAll = () => {
    setImage(null);
    setExtractedText('');
  };

  // Actualizar texto extraído manualmente
  const updateExtractedText = (text) => {
    setExtractedText(text);
  };

  return {
    // Estado
    image,
    extractedText,
    loading,
    
    // Acciones
    takePhoto,
    pickImage,
    processImage,
    clearAll,
    updateExtractedText,
    
    // Setters
    setImage,
    setExtractedText,
  };
};