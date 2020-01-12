import i18next from 'i18next';

export const switchLanguage = ({ target }: any): void => {
    i18next.changeLanguage(target.value);
};
