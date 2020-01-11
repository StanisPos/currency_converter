import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getCurrenciesList } from './ducks/currency/actions';
import './App.scss';

const App: React.FC = (props: any) => {
    const handleClick = (): void => {
        props.test({
            asd: 1
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        test: getCurrenciesList
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(App);
