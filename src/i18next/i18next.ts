import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import faTranslation from "./fa.json"
import enTranslation from "./en.json"

const resources = {
    en: {
        translation: enTranslation,
    },
    fa: {
        translation: faTranslation,
    },
};


i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;