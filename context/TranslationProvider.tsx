import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../constants/types'
import { fetchTranslation } from '../api/fetchTranslation';
import { defaultKey } from '../constants/translations';

interface TranslationContextProps {
  t: (key: string) => string;
  changeLanguage: (language: Language) => void;
  language: Language;
  isLoading: boolean;
}

export const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
  initialLanguage: Language;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children, initialLanguage }) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [translationsCache, setTranslationsCache] = useState<{ [key in Language]: { [key: string]: string } }>({
    [Language.English]: {},
    [Language.French]: {}
  });

  const t = (key: string): string => {
    return translationsCache[language]?.[key] || key;
  };

  const changeLanguage = (lang: Language) => {
    if (!translationsCache[lang]?.[defaultKey]) {
      setIsLoading(true);
      fetchTranslation(lang)
        .then((translation) => {
          setTranslationsCache(prevCache => ({
            ...prevCache,
            [lang]: translation,
          }));
          setLanguage(lang);
        })
        .catch((error) => {
          console.error('Error fetching translation:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setLanguage(lang);
    }
  };

  useEffect(() => {
    changeLanguage(initialLanguage)
  }, []);

  return (
    <TranslationContext.Provider value={{ t, changeLanguage, language, isLoading }}>
      {children}
    </TranslationContext.Provider>
  );
};
