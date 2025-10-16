import { useOCR } from './useOCR';
import { useTranslator } from './useTranslator';
import { useEffect, useState, useCallback, useRef } from 'react';

export const useAppLogic = () => {
  const ocr = useOCR();
  const translator = useTranslator();
  const [isTranslating, setIsTranslating] = useState(false);
  
  // trackear texto anterior y evitar updates duplicados
  const previousExtractedText = useRef('');

  useEffect(() => {
    // Solo procesar si hay texto nuevo y diferente al anterior
    const newText = ocr.extractedText;
    
    if (newText && 
        newText.trim() !== '' && 
        newText !== previousExtractedText.current) {
      
      console.log('Actualizando texto extraído en traductor:', newText.substring(0, 50) + '...');
      previousExtractedText.current = newText;
      
      // Actualizar índice 0 con texto extraído
      translator.updateNote(0, newText);
      
      // handleAutoTranslate(newText);
    }
  }, [ocr.extractedText, translator.updateNote]); 

  const handleAutoTranslate = useCallback(async (text) => {
    if (!text.trim()) return;
    
    setIsTranslating(true);
    try {
      console.log('Iniciando traducción automática...');
      // const translatedText = await elModeloDeÑon(text);
      // translator.updateNote(1, translatedText);
      
      // Simulación temporal
      // translator.updateNote(1, `[Traducido]: ${text}`);
    } catch (error) {
      console.error('Error en traducción automática:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [translator.updateNote]);

  const captureAndProcess = useCallback(async (useCamera = true) => {
    try {
      console.log('Iniciando captura...', useCamera ? 'Cámara' : 'Galería');
      if (useCamera) {
        await ocr.takePhoto();
      } else {
        await ocr.pickImage();
      }
    } catch (error) {
      console.error('Error en captura:', error);
    }
  }, [ocr.takePhoto, ocr.pickImage]);

  // Estado de carga combinado
  const isLoading = ocr.loading || isTranslating;

  return {
    // Estado del traductor
    ...translator,
    
    // Estado de OCR
    ...ocr,
    
    // Estados combinados
    isLoading,
    isTranslating,
    
    // Funciones especializadas (todas estables)
    captureAndProcess,
    handleAutoTranslate,
  };
};