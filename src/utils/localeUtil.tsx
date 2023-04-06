import en from "../locales/en";
import am from "../locales/am";

export const getLocaleContent = (locale: string) => {
  switch (locale) {
    case "am":
      return am;
    case "en":
      return en;
    default:
      return en;
  }
};
