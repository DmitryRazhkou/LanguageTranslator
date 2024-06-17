import React from 'react';
import { AppProps } from 'next/app';
import { TranslationProvider } from '../context/TranslationProvider';
import { Language } from '../constants/types';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <TranslationProvider initialLanguage={Language.English}>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}

export default MyApp;