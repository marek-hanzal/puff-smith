import coolI18n           from "i18next";
import LanguageDetector   from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

export const i18n = async () => {
    await coolI18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng:   "en",
            debug:         false,
            initImmediate: true,
            keySeparator:  false,
            nsSeparator:   false,
            interpolation: {
                prefix:      "{",
                suffix:      "}",
                escapeValue: false,
            },
            defaultNS:     "common",
            detection:     {
                order: [
                    // "querystring",
                    "cookie",
                    "htmlTag",
                    "localStorage",
                    "sessionStorage",
                    "path",
                    "subdomain",
                    "navigator",
                ],
            },
        });
    return coolI18n;
};
