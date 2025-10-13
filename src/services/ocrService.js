import axios from 'axios';

const OCR_API_KEY = 'K82648093388957';
const OCR_API_URL = 'https://api.ocr.space/parse/image';

export const extractTextWithOCR = async (imageUri) => {
  try {
    // Crear FormData para enviar la imagen
    const formData = new FormData();
    formData.append('apikey', OCR_API_KEY);
    formData.append('language', 'spa');
    formData.append('isOverlayRequired', 'false');
    formData.append('base64Image', `data:image/jpeg;base64,${imageUri}`);
    formData.append('OCREngine', '2'); // es el motor que más dirve para español

    const response = await axios.post(OCR_API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data.IsErroredOnProcessing) {
      throw new Error(response.data.ErrorMessage);
    }

    // Extraer texto de todos los resultados
    const parsedResults = response.data.ParsedResults;
    if (parsedResults && parsedResults.length > 0) {
      return parsedResults[0].ParsedText;
    }

    return 'No se pudo extraer texto de la imagen';
    
  } catch (error) {
    console.error('Error en OCR:', error);
    throw new Error(`Error al procesar la imagen: ${error.message}`);
  }
};