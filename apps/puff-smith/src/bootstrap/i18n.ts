import coolI18n           from "i18next";
import LanguageDetector   from "i18next-browser-languagedetector";
import Backend            from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

export const i18n = async () => {
    await coolI18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng:   "en",
            debug:         false,
            initImmediate: true,
            keySeparator:  false,
            nsSeparator:   false,
            interpolation: {
                escapeValue: false,
            },
            detection:     {
                order: [
                    "querystring",
                    "cookie",
                    "htmlTag",
                    "localStorage",
                    "sessionStorage",
                    "path",
                    "subdomain",
                    "navigator",
                ],
            },
            backend:       {
                loadPath:          "/api/translation/{{lng}}/{{ns}}.json",
                addPath:           "/api/translation/{{lng}}/{{ns}}/create",
                allowMultiLoading: false,
                crossDomain:       true,
                reloadInterval:    10,
            },
        });
    return coolI18n;
};
