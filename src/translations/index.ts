import i18n from 'i18next';
import ru from './ru';
import en from './en';

const i18nextConfig = {
    fallbackLng: 'ru',
    ns: [
        'headers',
        'currencies'
    ],
    defaultNS: 'headers',
    resources: {
        ru,
        en
    }
};

i18n.init(i18nextConfig);

export default i18n;
