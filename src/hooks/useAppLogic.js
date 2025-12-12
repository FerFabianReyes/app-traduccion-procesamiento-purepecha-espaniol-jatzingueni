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
      .replace(/\s+/g, ' ')
      .replace(/\n/g, ' ')
      .trim();
  };

  const mapeoTraducciones = [
    {
      español: 'Para beneficiarnos de los buenos consejos que recibamos, tenemos que ser humildes y modestos',
      purepecha: 'ParajtsÏni marhuacheni konseju ma, jatsiskachi para kaxumbitiini ka jiÃ³kuarhini eskachi no iÃ¡mindu ambe mÃ­teska'
    },
    {
      español: 'La sabiduría acompaña a los que piden consejo', 
      purepecha: 'Ima kÊ¼uiripu enga kurhajkuarhijka konsejuni xarhatasÃ¯ndi jÃ¡nhaskakua'
    }
  ];

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
      console.log('Iniciando traducción manual...');
      
      // Sólo es una simulación
      const simulatedTranslation = simularTraduccionPurépecha(textToTranslate);
      
      // Actualizar el índice 1 con la "traducción"
      translator.updateNote(1, simulatedTranslation);
      
      console.log('Traducción simulada completada');
      
    } catch (error) {
      console.error('Error en traducción manual:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [translator.notes[0]]);

  // Sólo es una simulación
  const simularTraduccionPurépecha = (texto) => {
    const textoNormalizado = normalizarTexto(texto);
    
    // Buscar coincidencia exacta o parcial
    const traduccion = mapeoTraducciones.find(item => 
      normalizarTexto(item.español) === textoNormalizado
    );
    
    if (traduccion) {
      return traduccion.purepecha;
    }
    
    return texto + ' [Simulación]';
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