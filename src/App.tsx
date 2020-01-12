import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
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

    return (
        <Main actionClick={handleClick} />
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        test: getCurrenciesList
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(App);
