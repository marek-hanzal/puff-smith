import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		initImmediate: true,
		resources: {
			cs: {
				translation: {
					"error.not-found.title": "Stránka nebyla nalezena!",
					"error.not-found.body": "Je nám líto, ale stránka nebyla nalezena nebo není aktuálně dostupná.",
					"common.homepage": "Jít na domovskou stránku",
					"common.spinner": "",
				}
			},
			en: {
				translation: {
					"common.error.cannot-fetch-translations": "Cannot fetch translations!",
					"common.refresh": "Refresh!",
					"common.homepage": "Go to Homepage",
					"common.spinner": "",
					"error.not-found.title": "Not Found!",
					"error.not-found.body": "Yay, this page does not exists, really :(.",
				}
			}
		},
		keySeparator: false,
		nsSeparator: false,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
