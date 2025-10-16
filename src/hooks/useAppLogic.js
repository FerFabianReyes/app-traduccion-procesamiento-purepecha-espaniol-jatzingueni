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
    }
  }, [ocr.extractedText, translator.updateNote]); 

  // Traducción manual al presionar botón
  const handleManualTranslate = useCallback(async () => {
    const textToTranslate = translator.notes[0];
    
    if (!textToTranslate || !textToTranslate.trim()) {
      console.log('No hay texto para traducir');
      return;
    }
    
    setIsTranslating(true);
    try {
      console.log('Iniciando traducción manual...');
      
      // Sólo es una simulación
      //const simulatedTranslation = `[Traducido]: ${textToTranslate}`;
      const simulatedTranslation = simularTraduccionPurépecha(textToTranslate);
      
      // Actualizar el índice 1 con la "traducción"
      translator.updateNote(1, simulatedTranslation);
      
      console.log('Traducción simulada completada');
      
    } catch (error) {
      console.error('Error en traducción manual:', error);
      //  mostrar un mensaje de error al usuario
    } finally {
      setIsTranslating(false);
    }
  }, [translator.notes, translator.updateNote]);

  // Sólo es una simulación
  const simularTraduccionPurépecha = (texto) => {
    return texto + ' (simulado)';
  };

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
    
    // Funciones
    captureAndProcess,
    handleManualTranslate, 
  };
};