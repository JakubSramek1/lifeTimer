import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import data from '../public/locales/en/translation.json'

if (!i18n.isInitialized)
    i18n.use(initReactI18next).init({
        resources: {
            en: {
                translation: data,
            },
        },
        lng: 'en',
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
