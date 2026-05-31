import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import pt from "./locales/pt.json"
import en from "./locales/en.json"
import es from "./locales/es.json"

const savedLanguage = localStorage.getItem("language")

function getDefaultLanguage() {
  const browserLanguage =
    navigator.language.toLowerCase()

  if (browserLanguage.startsWith("pt")) {
    return "pt"
  }

  if (browserLanguage.startsWith("es")) {
    return "es"
  }

  return "en"
}

const initialLanguage =
  savedLanguage ?? getDefaultLanguage()

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: pt,
    },
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },

  lng: initialLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
})

export default i18n