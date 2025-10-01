import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        ns: ['translation'],
        defaultNS: 'translation',
        fallbackLng: 'en',
        supportedLngs: [
            'en', // English
            'de', // Deutsch
            'bg', // Български
            'cs', // Čeština
            'da', // Dansk
            'el', // Ελληνικά
            'es', // Español
            'fr', // Français
            'hu', // Magyar
            'it', // Italiano
            'nl', // Nederlands
            'no', // Norsk
            'pl', // Polski
            'pt', // Português
            'ro', // Română
            'ru', // Русский
            'sk', // Slovenčina
            'sv', // Svenska
        ],
        debug: false,
        backend: {
            // Loads from: /public/locales/{lng}/translation.json
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
        },
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
    });

export default i18n;
