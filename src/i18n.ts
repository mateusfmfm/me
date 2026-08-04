import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import type { AppLanguage } from "./detectLanguage";
import ptBR from "./locales/pt-BR";
import en from "./locales/en";

export async function initI18n(lng: AppLanguage) {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        "pt-BR": { translation: ptBR },
        en: { translation: en },
      },
      lng,
      fallbackLng: "en",
      supportedLngs: ["pt-BR", "en"],
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["localStorage"],
        caches: ["localStorage"],
      },
    });
}

export default i18n;
