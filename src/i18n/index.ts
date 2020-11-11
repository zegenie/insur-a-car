import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import NbNoTranslations from './nb_no.json';

const resources = {
    no: {
        translation: NbNoTranslations
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "no",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
