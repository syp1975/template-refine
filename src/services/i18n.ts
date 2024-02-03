import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

export const languages: { [name: string]: string } = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  //  fr: "Français",
  //  ct: "Català",
};

i18n
  .use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    supportedLngs: Object.keys(languages),
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: Object.keys(languages),
  });

export default i18n;
