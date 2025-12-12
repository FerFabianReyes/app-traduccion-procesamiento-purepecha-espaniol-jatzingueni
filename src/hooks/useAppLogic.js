import { useOCR } from './useOCR';
import { useTranslator } from './useTranslator';
import { useEffect, useState, useCallback, useRef } from 'react';

export const useAppLogic = () => {
  const ocr = useOCR();
  const translator = useTranslator();
  const [isTranslating, setIsTranslating] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const previousExtractedText = useRef('');

  const normalizarTexto = (texto) => {
    if (!texto) return '';
    return texto
      .toLowerCase()
      .trim()
      .replace(/[¿?¡!]/g, '')
      .replace(/\s+/g, ' ');
  };

  // Base de datos de palabras/frases
  const diccionario = [
    { purepecha: 'Náandi', español: 'Madre, mamá' },
    { purepecha: 'akamba', español: 'maguey' },
    { purepecha: 'ch\'anakua', español: 'juego, deporte' },
    { purepecha: 'ch\'anakua uandakua', español: 'chiste' },
    { purepecha: 'ch\'anani', español: 'jugar' },
    { purepecha: 'itsï uerati', español: 'fuente de agua, manantial' },
    { purepecha: 'Namupuru', español: '¿Cuántas partes?, ¿en cuántas partes?' },
    { purepecha: '¿Naniesïki?', español: '¿En dónde es?' },
    { purepecha: 'Nanindarku', español: 'En cualquier parte' },
    { purepecha: 'Naniri', español: '¿A dónde vas?' },
    { purepecha: 'Nanita', español: 'Abuela' },
    { purepecha: 'Naxanirhu', español: 'En qué número, en qué orden' },
    { purepecha: '¿Naxanisïki?', español: '¿Cuánto es?' },
    { purepecha: 'Náxaru', español: 'Posiblemente' },
    { purepecha: 'Nipá', español: 'Adiós, me voy' },
    { purepecha: 'Achoki', español: 'Ajolote' },
    { purepecha: 'Ambajtsïtakua', español: 'Peine, cepillo' },
    { purepecha: 'Ambakerani', español: 'Limpiarlo, Sanarlo' },
    { purepecha: 'jauiri', español: 'pelo, cabello' },
    { purepecha: 'jaxiti', español: 'sucio' },
    { purepecha: 'jeiaki', español: 'ratón' },
    { purepecha: 'jeiaki iuiri', español: 'rata' },
    { purepecha: 'jeiapanhintani', español: 'gustar, agradar' },
  ];

  // Función para buscar traducción respetando el idioma seleccionado
  const buscarTraduccion = (texto) => {
    const textoNormalizado = normalizarTexto(texto);
    const sourceLanguage = translator.sourceLanguage;
    const targetLanguage = translator.targetLanguage;

    // Si es Español -> Purépecha
    if (sourceLanguage.includes('Español') && targetLanguage.includes('Purépecha')) {
      for (let item of diccionario) {
        const españolNormalizado = normalizarTexto(item.español);
        if (españolNormalizado.includes(textoNormalizado) || textoNormalizado.includes(españolNormalizado)) {
          return item.purepecha;
        }
      }
    }
    // Si es Purépecha -> Español
    else if (sourceLanguage.includes('Purépecha') && targetLanguage.includes('Español')) {
      for (let item of diccionario) {
        const purepechaNormalizado = normalizarTexto(item.purepecha);
        if (purepechaNormalizado === textoNormalizado || purepechaNormalizado.includes(textoNormalizado)) {
          return item.español;
        }
      }
    }

    return null;
  };

  // OCR → NoteCard[0]
  useEffect(() => {
    const newText = ocr.extractedText;
    
    if (newText && newText.trim() !== '' && newText !== previousExtractedText.current) {
      previousExtractedText.current = newText;
      translator.updateNote(0, newText);
    }
  }, [ocr.extractedText]);

  // Limpiar NoteCard[1] cuando NoteCard[0] esté vacío
  useEffect(() => {
    if ((!translator.notes[0] || translator.notes[0].trim() === '') && 
        translator.notes[1] && translator.notes[1].trim() !== '') {
      translator.updateNote(1, '');
    }
  }, [translator.notes[0]]);

  // Traducción manual al presionar botón
  const handleManualTranslate = useCallback(async () => {
    const textToTranslate = translator.notes[0];
    
    if (!textToTranslate || !textToTranslate.trim()) {
      console.log('No hay texto para traducir');

      if (translator.notes[1] && translator.notes[1].trim() !== '') {
        translator.updateNote(1, '');
      }
      return;
    }
    
    setIsTranslating(true);
    try {
      console.log('Iniciando traducción...');
      
      const traduccion = buscarTraduccion(textToTranslate);
      
      if (traduccion) {
        translator.updateNote(1, traduccion);
      } else {
        translator.updateNote(1, 'Ayúdanos a llevar las lenguas más allá 🌍');
      }
      
      console.log('Traducción completada');
      
    } catch (error) {
      console.error('Error en traducción manual:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [translator.notes[0], translator.sourceLanguage, translator.targetLanguage]);

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
  }, [ocr]);

  // Manejo del menú
  const handleMenuPress = useCallback(() => {
    setIsMenuVisible(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuVisible(false);
  }, []);

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
    isMenuVisible,
    
    // Funciones
    captureAndProcess,
    handleManualTranslate,
    handleMenuPress,
    closeMenu,
  };
};