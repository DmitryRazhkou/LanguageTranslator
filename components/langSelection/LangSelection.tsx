import React from 'react';
import { Language } from '../../constants/types';
import { Button } from '../Button/Button';

import styles from '../../styles/LangSelection.module.css';

interface LangSelectionProps {
  onLanguageChange: (language: Language) => void;
  selectedLanguage?: Language;
}

const availableLanguages: { key: Language; label: string }[] = [
  { key: Language.English, label: 'English' },
  { key: Language.French, label: 'French' },
];

const LangSelection: React.FC<LangSelectionProps> = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className={styles.langSelection}>
      {availableLanguages.map(({ key, label }) => (
        <Button
          key={key}
          text={label}
          onClick={() => onLanguageChange(key)}
          isSelected={selectedLanguage === key}
        />
      ))}
    </div>
  );
};

export default LangSelection;
