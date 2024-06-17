import React from 'react';
import LangSelection from '../components/langSelection/LangSelection';
import { useTranslation } from '../hooks/useTranslation';
import { defaultKey } from '../constants/translations';

import styles from '../styles/App.module.css';

const IndexPage: React.FC = () => {
  const { t, changeLanguage, language, isLoading } = useTranslation();

  return (
    <div className={styles.mainContainer}>
      <LangSelection 
        selectedLanguage={language}
        onLanguageChange={changeLanguage} 
      />
      {isLoading ? <p>Loading...</p> : <p>{t(defaultKey)}</p>}
    </div>
  );
}

export default IndexPage;
