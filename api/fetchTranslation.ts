import { Language } from '../constants/types';
import { translations } from '../constants/translations';

export const fetchTranslation = (language: Language): Promise<{ [key: string]: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const translation = translations[language];
      if (translation) {
        resolve(translation);
      } else {
        reject(new Error("Translation not found"));
      }
    }, 1000);
  });
};
