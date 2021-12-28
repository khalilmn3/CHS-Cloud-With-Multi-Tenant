import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from './en';
import zhLocale from './zh';
import viLocale from './vi';

Vue.use(VueI18n);

const messages = {
    en: {
        ...enLocale,
    },
    zh: {
        ...zhLocale,
    },
    vi: {
        ...viLocale,
    },
};

// export function getLanguage() {
//   const chooseLanguage = Cookies.get('language');
//   if (chooseLanguage) {
//     return chooseLanguage;
//   }

//   // if has not choose language
//   const language = (navigator.language || navigator.browserLanguage).toLowerCase();
//   const locales = Object.keys(messages);
//   for (const locale of locales) {
//     if (language.indexOf(locale) > -1) {
//       return locale;
//     }
//   }
//   return 'en';
// }
const i18n = new VueI18n({
    // set locale
    // options: en | vi | zh
    locale: 'en',
    // set locale messages
    messages,
});

export default i18n;
