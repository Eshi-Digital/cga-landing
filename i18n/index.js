var en = require("./translations.en.json");
var am = require("./translations.am.json");

const i18n = {
  translations: {
    en,
    am,
  },
  defaultLang: "am",
  useBrowserDefault: true,
};

module.exports = i18n;
