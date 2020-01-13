import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Main from 'scenes/Main';

import { getCurrenciesList } from './ducks/currency/actions';
import { HEADERS } from './translations/constants';
import './App.scss';
import { requests } from './services/api';

const App: any = (props: any) => {
    const { t } = useTranslation(HEADERS);

    const handleClick = (e: any): void => {
        e.domEvent.preventDefault();

        props.test({
            asd: 1
        });
    };

    setTimeout(() => {
        requests.getCurrencies().then((res) => console.log(res));
    }, 5000);

    setTimeout(() => {
        requests.getPreviousData({
            day: '30',
            month: '5',
            year: '2019'
        }).then((res) => console.log(res));
    }, 10000);


    return (
        <Main text={t('no')} actionClick={handleClick} />
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        test: getCurrenciesList
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(React.memo(App));
