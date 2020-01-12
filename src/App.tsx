import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Main from 'scenes/Main';

import { getCurrenciesList } from './ducks/currency/actions';
import './App.scss';

const App: any = (props: any) => {
    const handleClick = (e: any): void => {
        e.domEvent.preventDefault();

        props.test({
            asd: 1
        });
    };

    const { t } = useTranslation('translation');
    const test = t('translation:yes');

    setTimeout(() => {
        i18next.changeLanguage('en');
    }, 3000);

    return (
        <Main text={test} actionClick={handleClick} />
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        test: getCurrenciesList
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(React.memo(App));
