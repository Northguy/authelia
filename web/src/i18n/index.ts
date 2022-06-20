// Code generated by go generate. DO NOT EDIT.
//
// Run the following command to generate this file:
// 		go run ./cmd/authelia-gen code keys
//

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { getBasePath } from "@utils/BasePath";

const basePath = getBasePath();

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ["querystring", "navigator"],
            lookupQuerystring: "lng",
        },
        backend: {
            loadPath: basePath + "/locales/{{lng}}/{{ns}}.json",
        },
        ns: ["portal"],
        defaultNS: "portal",
        fallbackLng: {
            default: ["en"],
            de: ["en"],
            es: ["en"],
            fr: ["en"],
            ru: ["en"],
            sv: ["en"],
            "sv-SE": ["sv", "en"],
            "zh-TW": ["en"],
        },
        load: "all",
        supportedLngs: ["de", "en", "es", "fr", "ru", "sv", "sv-SE", "zh-TW"],
        lowerCaseLng: false,
        nonExplicitSupportedLngs: true,
        interpolation: {
            escapeValue: false,
        },
        debug: false,
    });

export default i18n;
