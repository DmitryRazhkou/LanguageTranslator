import { Language } from './types';

//To further expand translations
const defaultKey = "defaultText";

const translations = {
  [Language.English]: {
    defaultText: "This is an article in English language."
  },
  [Language.French]: {
    defaultText: "Ceci est un article en langue française."
  }
};

export { defaultKey, translations };
