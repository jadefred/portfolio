import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json";
import fr from "./languages/fr.json";
import zh from "./languages/zh.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
    zh: {
      translation: zh,
    },
  },
  lng: localStorage.getItem("lng") || "fr",
});

export default i18next;
