// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import ptTranslation from './locales/pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: ptTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: 'pt', // Default language
    fallbackLng: 'pt', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
  });

export default i18n;


