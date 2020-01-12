import i18n from 'i18next';
import ru from './ru';
import en from './en';

const i18nextConfig = {
    fallbackLng: 'ru',
    ns: [
        'translation'
    ],
    defaultNS: 'translation',
    resources: {
        ru,
        en
    }
};

i18n.init(i18nextConfig);

export default i18n;
